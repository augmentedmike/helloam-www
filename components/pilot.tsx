"use client";

import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

function Check() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
      <path d="M2 6.5L5 9.5L11 3.5" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pilot() {
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh");

  return (
    <section
      id="pilot"
      className="px-6 py-24"
      style={{
        background: "rgba(0,229,255,0.015)",
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
            {t.pilot.eyebrow}
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            {t.pilot.headline1}
            <br />
            <span style={{ color: "#00E5FF" }}>{t.pilot.headline2}</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#666666" }}>
            {t.pilot.subhead}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Who qualifies */}
          <div
            className="rounded-2xl p-8"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <h3 className="text-lg font-bold text-white mb-5">{t.pilot.whoTitle}</h3>
            <div className="space-y-4">
              {t.pilot.who.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ background: "#00E5FF" }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#666666" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What you get */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(0,229,255,0.05)",
              border: "1px solid rgba(0,229,255,0.2)",
              boxShadow: "0 0 40px rgba(0,229,255,0.05)",
            }}
          >
            <h3 className="text-lg font-bold text-white mb-5">{t.pilot.perksTitle}</h3>
            <ul className="space-y-3">
              {t.pilot.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2.5">
                  <Check />
                  <span className="text-sm" style={{ color: "#aaaaaa" }}>{perk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:augmentedmike@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-100"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "#cccccc",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {t.pilot.cta}
            </a>
            <a
              href="https://github.com/augmentedmike/am-agi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-100"
              style={{
                background: "rgba(255,255,255,0.04)",
                color: "#888888",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {t.pilot.ctaRepo}
            </a>
          </div>
          <p className="mt-4 text-sm" style={{ color: "#444444" }}>
            {t.pilot.ctaNote}
          </p>
        </div>
      </div>
    </section>
  );
}
