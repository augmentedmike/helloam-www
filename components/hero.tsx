"use client";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-dvh px-6 py-24 text-center overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(0,229,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-10"
          style={{
            background: "rgba(0,229,255,0.08)",
            border: "1px solid rgba(0,229,255,0.25)",
            color: "#00E5FF",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#00E5FF" }}
          />
          Now in pilot — limited spots open
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          <span className="text-white">The AI that </span>
          <span style={{ color: "#00E5FF" }}>does the work.</span>
        </h1>

        {/* Subhead */}
        <p
          className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ color: "#888888" }}
        >
          AM takes end-to-end ownership of your team&apos;s highest-volume work — triage, code, and support —
          so your team ships faster with less overhead. One worker, your whole team covered.
        </p>

        {/* Persona pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { label: "For PMs", color: "#00E5FF", desc: "Backlog triage & sprint grooming" },
            { label: "For Developers", color: "#4A90D9", desc: "Tickets → PRs, autonomously" },
            { label: "For Support", color: "#F5A623", desc: "24/7 ticket resolution" },
          ].map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: `${p.color}12`,
                border: `1px solid ${p.color}35`,
                color: p.color,
              }}
            >
              <span>{p.label}</span>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
              <span className="text-xs font-normal" style={{ color: "#777" }}>
                {p.desc}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-100 whitespace-nowrap"
            style={{ background: "#00E5FF", color: "#0a0a0a", boxShadow: "0 0 48px rgba(0,229,255,0.3)" }}
          >
            Get early access
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-medium transition-colors hover:text-white"
            style={{ color: "#666666" }}
          >
            See how it works <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap items-center justify-center gap-10 pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          {[
            { stat: "24/7", label: "Always working" },
            { stat: "85%", label: "Tickets auto-resolved" },
            { stat: "0", label: "Context switches needed" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="text-3xl font-bold text-white"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                {s.stat}
              </p>
              <p className="text-xs mt-1" style={{ color: "#555" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
