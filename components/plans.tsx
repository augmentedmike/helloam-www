"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
const SESSION_PRICE = Number(process.env.NEXT_PUBLIC_SESSION_PRICE) || 75;

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
      <path d="M2 7L5.5 10.5L12 4" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const inputClass = "w-full px-4 py-3 rounded-xl text-sm text-white placeholder-[#555] outline-none focus:ring-1 focus:ring-[#00E5FF]";

function PaymentForm({ onSuccess, processingLabel }: { onSuccess: () => void; processingLabel: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError("");

    const result = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (result.error) {
      setError(result.error.message || "Payment failed. Please try again.");
      setLoading(false);
    } else if (result.paymentIntent?.status === "succeeded") {
      onSuccess();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement
        options={{
          layout: "tabs",
        }}
      />
      {error && <p className="text-sm" style={{ color: "#ff4444" }}>{error}</p>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="flex items-center justify-center w-full px-8 py-4 rounded-xl text-base font-bold transition-all duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-100 disabled:opacity-50 cursor-pointer"
        style={{ background: "#00E5FF", color: "#0a0a0a", boxShadow: "0 0 48px rgba(0,229,255,0.25)" }}
      >
        {loading ? processingLabel : `Pay $${SESSION_PRICE}`}
      </button>
    </form>
  );
}

function SessionCheckoutModal({
  open,
  onClose,
  modal,
}: {
  open: boolean;
  onClose: () => void;
  modal: ReturnType<typeof getTranslation>["plans"]["modal"];
}) {
  const [step, setStep] = useState<"info" | "payment" | "success">("info");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  // Reset state when modal opens
  useEffect(() => {
    if (open) {
      setStep("info");
      setClientSecret("");
      setApiError("");
      setErrors({});
    }
  }, [open]);

  if (!open) return null;

  async function handleContinue() {
    const errs: Record<string, string> = {};
    if (!name.trim() || name.trim().length < 2) errs.name = modal.nameRequired;
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = modal.emailRequired;
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    setApiError("");
    try {
      const res = await fetch("/api/session-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      const data = await res.json();
      if (!res.ok) { setApiError(data.error || "Something went wrong."); setLoading(false); return; }
      setClientSecret(data.clientSecret);
      setStep("payment");
    } catch {
      setApiError("Network error. Please try again.");
    }
    setLoading(false);
  }

  const inputStyle = (field: string) => ({
    background: "rgba(255,255,255,0.06)",
    border: errors[field] ? "1px solid #ff4444" : "1px solid rgba(255,255,255,0.1)",
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md rounded-2xl p-6 space-y-4"
        style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-white">
            {step === "success" ? modal.titleSuccess : modal.titleBook}
          </h3>
          <button onClick={onClose} className="text-[#555] hover:text-white text-xl leading-none cursor-pointer">×</button>
        </div>

        {step === "info" && (
          <>
            <p className="text-sm" style={{ color: "#888" }}>
              {modal.descInfo} — <strong className="text-white">${SESSION_PRICE}</strong>.
            </p>
            <div>
              <input type="text" placeholder={modal.namePlaceholder} value={name} onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: "" })); }} className={inputClass} style={inputStyle("name")} />
              {errors.name && <p className="text-xs mt-1" style={{ color: "#ff4444" }}>{errors.name}</p>}
            </div>
            <div>
              <input type="email" placeholder={modal.emailPlaceholder} value={email} onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: "" })); }} className={inputClass} style={inputStyle("email")} />
              {errors.email && <p className="text-xs mt-1" style={{ color: "#ff4444" }}>{errors.email}</p>}
            </div>
            {apiError && <p className="text-sm" style={{ color: "#ff4444" }}>{apiError}</p>}
            <button
              onClick={handleContinue}
              disabled={loading}
              className="flex items-center justify-center w-full px-8 py-4 rounded-xl text-base font-bold transition-all duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-100 disabled:opacity-50 cursor-pointer"
              style={{ background: "#00E5FF", color: "#0a0a0a", boxShadow: "0 0 48px rgba(0,229,255,0.25)" }}
            >
              {loading ? modal.loading : modal.continueBtn}
            </button>
          </>
        )}

        {step === "payment" && clientSecret && (
          <>
            <p className="text-sm" style={{ color: "#888" }}>
              Paying as <strong className="text-white">{name}</strong> ({email})
            </p>
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret,
                appearance: {
                  theme: "night",
                  variables: {
                    colorPrimary: "#00E5FF",
                    colorBackground: "#1a1a1a",
                    colorText: "#ffffff",
                    colorTextSecondary: "#888888",
                    borderRadius: "12px",
                    fontFamily: "inherit",
                  },
                },
              }}
            >
              <PaymentForm onSuccess={() => setStep("success")} processingLabel={modal.processing} />
            </Elements>
            <button
              onClick={() => setStep("info")}
              className="text-xs text-center w-full cursor-pointer"
              style={{ color: "#555" }}
            >
              {modal.back}
            </button>
          </>
        )}

        {step === "success" && (
          <div className="text-center py-4">
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
              style={{ background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.3)" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12L10 17L19 8" stroke="#00E5FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-white mb-2">{modal.successTitle}</p>
            <p className="text-sm mb-1" style={{ color: "#888" }}>
              {(() => {
                const parts = modal.successBody.split("{email}");
                if (parts.length === 2) {
                  return <>{parts[0]}<strong className="text-white">{email}</strong>{parts[1]}</>;
                }
                return modal.successBody.replace("{email}", email);
              })()}
            </p>
            <p className="text-xs mb-6" style={{ color: "#555" }}>{modal.successReceipt}</p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-sm font-semibold cursor-pointer"
              style={{ background: "#00E5FF", color: "#0a0a0a" }}
            >
              {modal.done}
            </button>
          </div>
        )}

        {step !== "success" && (
          <p className="text-center text-[10px]" style={{ color: "#444" }}>{modal.securePayment}</p>
        )}
      </div>
    </div>
  );
}

export default function Plans() {
  const [showCheckout, setShowCheckout] = useState(false);
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh");

  return (
    <section
      id="support"
      className="px-6 py-24"
      style={{
        background: "rgba(0,229,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#00E5FF" }}
          >
            {t.plans.eyebrow}
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            {t.plans.headline}
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#666666" }}>
            {t.plans.subhead}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Free email */}
          <div
            className="flex flex-col rounded-2xl p-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <h3 className="text-lg font-bold text-white mb-1">{t.plans.free.title}</h3>
            <p className="text-sm mb-6" style={{ color: "#666666" }}>
              {t.plans.free.subtitle}
            </p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-bold text-white">{t.plans.free.price}</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {t.plans.free.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check />
                  <span className="text-sm" style={{ color: "#888888" }}>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="mailto:augmentedmike@gmail.com"
              className="block w-full text-center px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "#cccccc",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {t.plans.free.cta}
            </a>
          </div>

          {/* Live session */}
          <div
            className="relative flex flex-col rounded-2xl p-8"
            style={{
              background: "rgba(0,229,255,0.06)",
              border: "1px solid rgba(0,229,255,0.3)",
              boxShadow: "0 0 40px rgba(0,229,255,0.08)",
            }}
          >
            <div
              className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap"
              style={{ background: "#00E5FF", color: "#0a0a0a" }}
            >
              {t.plans.live.badge}
            </div>

            <h3 className="text-lg font-bold text-white mb-1">{t.plans.live.title}</h3>
            <p className="text-sm mb-6" style={{ color: "#666666" }}>
              {t.plans.live.subtitle}
            </p>

            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-bold text-white">${SESSION_PRICE}</span>
              <span style={{ color: "#555555" }}>{t.plans.live.perMin}</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {t.plans.live.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check />
                  <span className="text-sm" style={{ color: "#888888" }}>{f}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setShowCheckout(true)}
              className="block w-full text-center px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 cursor-pointer"
              style={{ background: "#00E5FF", color: "#0a0a0a" }}
            >
              {`${t.plans.live.cta} — $${SESSION_PRICE}`}
            </button>
            <SessionCheckoutModal open={showCheckout} onClose={() => setShowCheckout(false)} modal={t.plans.modal} />
          </div>
        </div>

        <p className="text-center mt-8 text-sm" style={{ color: "#444444" }}>
          {t.plans.footer}
          <br />
          <a
            href="mailto:augmentedmike@gmail.com"
            className="transition-colors hover:text-white"
            style={{ color: "#666666", textDecoration: "underline" }}
          >
            {t.plans.footerCta}
          </a>{" "}
          {t.plans.footerSuffix}
        </p>
      </div>
    </section>
  );
}
