"use client";

import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

export default function Hero() {
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh");

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
          {t.hero.badge}
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          <span className="text-white">{t.hero.headline1}</span>
          <span style={{ color: "#00E5FF" }}>{t.hero.headline2}</span>
        </h1>

        {/* Subhead */}
        <p
          className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ color: "#888888" }}
        >
          {t.hero.subhead}
        </p>

        {/* Persona pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {t.hero.personas.map((p, i) => {
            const colors = ["#00E5FF", "#4A90D9", "#F5A623"];
            const color = colors[i] || "#00E5FF";
            return (
              <div
                key={p.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: `${color}12`,
                  border: `1px solid ${color}35`,
                  color: color,
                }}
              >
                <span>{p.label}</span>
                <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
                <span className="text-xs font-normal" style={{ color: "#777" }}>
                  {p.desc}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://github.com/augmentedmike/am-agi"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-100 whitespace-nowrap"
            style={{ background: "#00E5FF", color: "#0a0a0a", boxShadow: "0 0 48px rgba(0,229,255,0.3)" }}
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-medium transition-colors hover:text-white"
            style={{ color: "#666666" }}
          >
            {t.hero.ctaSecondary} <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>

      {/* App screenshot — board view */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mt-6 px-4">
        {/* Glow behind screenshot */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[60%] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,229,255,0.10) 0%, transparent 70%)",
          }}
        />
        {/* Browser chrome frame */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 0 0 1px rgba(0,229,255,0.12), 0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(0,229,255,0.08)",
          }}
        >
          {/* Chrome top bar */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#28CA41" }} />
            <div
              className="flex-1 mx-4 h-6 rounded-md flex items-center justify-center text-xs"
              style={{ background: "rgba(255,255,255,0.04)", color: "#555", maxWidth: 240, margin: "0 auto" }}
            >
              helloam.bot
            </div>
          </div>
          {/* Screenshot */}
          <img
            src="/hero-1-board.jpg"
            alt="AM Board — Kanban view showing tasks in Backlog, In Progress, and In Review"
            className="w-full block"
            style={{ display: "block" }}
          />
        </div>
      </div>

      {/* Stats — below screenshot */}
      <div
        className="relative z-10 w-full max-w-6xl mx-auto mt-10 px-4 flex flex-wrap items-center justify-center gap-10 pt-8"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        {t.hero.stats.map((s) => (
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
    </section>
  );
}
