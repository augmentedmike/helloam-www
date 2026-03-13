import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Session Booked | helloam.bot",
  description: "Your live session payment has been received. We'll email you to schedule.",
};

export default function SupportSuccess() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16"
      style={{ background: "#0a0a0a", color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif" }}
    >
      <div className="max-w-lg text-center">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8"
          style={{ background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.3)" }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path d="M6 14L11.5 19.5L22 9" stroke="#00E5FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Payment received.
        </h1>
        <p className="text-lg mb-2" style={{ color: "#888" }}>
          Your 30-minute live session is confirmed.
        </p>
        <p className="text-sm mb-8" style={{ color: "#555" }}>
          We&apos;ll email you within 24 hours to schedule your Zoom screenshare with Michael.
          Check your email for your receipt.
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ background: "#00E5FF", color: "#0a0a0a" }}
        >
          Back to helloam.bot
        </a>
      </div>
    </main>
  );
}
