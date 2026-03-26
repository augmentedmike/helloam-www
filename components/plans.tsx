"use client";

import ContactButton from "@/components/contact-button";

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
      <path d="M2 7L5.5 10.5L12 4" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const PLANS = [
  {
    name: "Free Forever",
    price: "$0",
    unit: "/ month",
    description: "Am core software, free forever. No credit card required. No time limit.",
    highlight: false,
    badge: "Free Forever",
    badgeStyle: "free",
    features: [
      "Am core software",
      "Email support",
      "Documentation & setup guides",
      "Community updates",
      "Self-hosted, runs on your device",
    ],
    cta: "Get started free",
    ctaHref: "#waitlist",
  },
  {
    name: "Starter",
    price: "$149",
    unit: "/ seat / month",
    description: "One AM worker for one team function. Great for running a proof-of-concept.",
    highlight: false,
    badge: null,
    badgeStyle: null,
    features: [
      "1 AM worker (PM, Developer, or Support)",
      "Up to 3 integrations",
      "500 tasks per month",
      "Priority email support",
      "30-day pilot included",
    ],
    cta: "Get early access",
    ctaHref: "#waitlist",
  },
  {
    name: "Growth",
    price: "$499",
    unit: "/ month",
    description: "AM across multiple team functions with shared context. The most popular tier.",
    highlight: true,
    badge: "Most popular",
    badgeStyle: null,
    features: [
      "3 AM workers (PM + Developer + Support)",
      "Unlimited integrations",
      "Unlimited tasks",
      "Dedicated success engineer",
      "Slack & priority support",
      "Custom workflows & schedules",
    ],
    cta: "Get early access",
    ctaHref: "#waitlist",
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "",
    description: "Custom deployment, SLA, and dedicated engineering for large organizations.",
    highlight: false,
    badge: null,
    badgeStyle: null,
    features: [
      "Unlimited AM workers",
      "Custom integrations & API access",
      "SSO, RBAC, and audit logs",
      "SOC 2 compliance",
      "Dedicated SLA",
      "On-site onboarding available",
    ],
    cta: "Contact us",
    ctaHref: "/contact",
  },
];

export default function Plans() {
  return (
    <section
      id="pricing"
      className="px-6 py-24"
      style={{
        background: "rgba(0,229,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#00E5FF" }}
          >
            Pricing
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Simple, team-based pricing.
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#666666" }}>
            Am is free forever at the core. Upgrade for expanded team coverage,
            priority support, and dedicated onboarding.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col rounded-2xl p-8"
              style={{
                background: plan.highlight ? "rgba(0,229,255,0.06)" : "rgba(255,255,255,0.03)",
                border: plan.highlight ? "1px solid rgba(0,229,255,0.3)" : "1px solid rgba(255,255,255,0.07)",
                boxShadow: plan.highlight ? "0 0 40px rgba(0,229,255,0.08)" : "none",
              }}
            >
              {plan.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                  style={
                    plan.badgeStyle === "free"
                      ? { background: "rgba(0,229,255,0.15)", color: "#00E5FF", border: "1px solid rgba(0,229,255,0.4)" }
                      : { background: "#00E5FF", color: "#0a0a0a" }
                  }
                >
                  {plan.badge}
                </div>
              )}

              <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-sm mb-6" style={{ color: "#666666" }}>
                {plan.description}
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.unit && (
                  <span className="text-sm" style={{ color: "#555555" }}>{plan.unit}</span>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check />
                    <span className="text-sm" style={{ color: "#888888" }}>{f}</span>
                  </li>
                ))}
              </ul>

              {plan.ctaHref === "/contact" ? (
                <ContactButton
                  category="Enterprise"
                  className="block w-full text-center px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 cursor-pointer"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "#cccccc",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {plan.cta}
                </ContactButton>
              ) : (
                <a
                  href={plan.ctaHref}
                  className="block w-full text-center px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90"
                  style={
                    plan.highlight
                      ? { background: "#00E5FF", color: "#0a0a0a" }
                      : { background: "rgba(255,255,255,0.06)", color: "#cccccc", border: "1px solid rgba(255,255,255,0.1)" }
                  }
                >
                  {plan.cta}
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm" style={{ color: "#444444" }}>
          Early access pricing. Rates locked in for founding customers.
          {" "}
          <ContactButton
            category="General"
            className="transition-colors hover:text-white cursor-pointer"
            style={{ color: "#666666", textDecoration: "underline" }}
          >
            Questions? Get in touch
          </ContactButton>
        </p>
      </div>
    </section>
  );
}
