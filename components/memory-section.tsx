"use client";

import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

const ACCENTS = ["#00E5FF", "#4A90D9", "#9B59B6", "#00BCD4", "#F5A623", "#4CAF50"];

export default function MemorySection() {
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh");

  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#9B59B6" }}
          >
            {t.memory.eyebrow}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            <span className="text-white">{t.memory.headline1} </span>
            <span style={{ color: "#9B59B6" }}>{t.memory.headline2}</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "#666" }}>
            {t.memory.subhead}
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.memory.features.map((f, i) => {
            const accent = ACCENTS[i] || "#9B59B6";
            return (
              <div
                key={f.title}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="w-8 h-[3px] rounded-full mb-5"
                  style={{ background: accent }}
                />
                <h3
                  className="text-base font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#777" }}>
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
