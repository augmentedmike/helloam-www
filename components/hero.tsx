"use client";

import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

export default function Hero() {
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh");

  return (
    <section className="relative min-h-dvh flex items-center overflow-hidden px-6 py-24">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(0,229,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left — text */}
        <div className="flex flex-col items-start text-left">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
            style={{
              background: "rgba(0,229,255,0.08)",
              border: "1px solid rgba(0,229,255,0.25)",
              color: "#00E5FF",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00E5FF" }} />
            {t.hero.badge}
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl font-bold leading-[1.05] tracking-tight mb-5"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            <span className="text-white">{t.hero.headline1}</span>
            <span style={{ color: "#00E5FF" }}>{t.hero.headline2}</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg leading-relaxed max-w-lg mb-8" style={{ color: "#888888" }}>
            {t.hero.subhead}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
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

          {/* Persona pills */}
          <div className="flex flex-wrap gap-2">
            {t.hero.personas.map((p, i) => {
              const colors = ["#00E5FF", "#4A90D9", "#F5A623"];
              const color = colors[i] || "#00E5FF";
              return (
                <div
                  key={p.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: `${color}12`, border: `1px solid ${color}35`, color }}
                >
                  <span>{p.label}</span>
                  <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
                  <span className="font-normal" style={{ color: "#777" }}>{p.desc}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right — board screenshot */}
        <div className="relative">
          {/* Glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-8 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,229,255,0.08) 0%, transparent 70%)" }}
          />
          {/* Browser chrome frame */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 0 1px rgba(0,229,255,0.12), 0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(0,229,255,0.08)",
            }}
          >
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#28CA41" }} />
              <div
                className="h-6 rounded-md flex items-center justify-center text-xs px-6"
                style={{ background: "rgba(255,255,255,0.04)", color: "#555", margin: "0 auto" }}
              >
                helloam.bot
              </div>
            </div>
            <img
              src="/hero-1-board.jpg"
              alt="AM Board — Kanban view showing tasks in Backlog, In Progress, and In Review"
              className="w-full block"
            />
          </div>
        </div>
      </div>

      {/* Stats strip — bottom of viewport */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div
          className="flex flex-wrap items-center justify-center gap-10 py-5 max-w-7xl mx-auto px-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          {t.hero.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                {s.stat}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "#555" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
