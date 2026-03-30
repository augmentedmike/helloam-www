"use client";

import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

export default function GitHistory() {
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh");

  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div
          className="rounded-2xl p-10 sm:p-14"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left: copy */}
            <div className="lg:w-96 shrink-0">
              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
                style={{ color: "#4A90D9" }}
              >
                {t.gitHistory.eyebrow}
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold leading-tight mb-5"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                <span className="text-white">{t.gitHistory.headline1}</span>
                <br />
                <span style={{ color: "#4A90D9" }}>{t.gitHistory.headline2}</span>
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#666" }}>
                {t.gitHistory.subhead}
              </p>
            </div>

            {/* Right: features */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {t.gitHistory.features.map((f, i) => (
                <div
                  key={f.title}
                  className="rounded-xl p-5"
                  style={{
                    background: "rgba(74,144,217,0.05)",
                    border: "1px solid rgba(74,144,217,0.12)",
                  }}
                >
                  <p
                    className="text-xs font-bold tabular-nums mb-3"
                    style={{ color: "rgba(74,144,217,0.5)", fontFamily: "monospace" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className="text-sm font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
