"use client";

import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

export default function Comparisons() {
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh");

  return (
    <section
      className="px-6 py-24"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#00E5FF" }}
          >
            {t.comparisons.eyebrow}
          </p>
          <h2
            className="text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            {t.comparisons.headline}
          </h2>
          <p className="text-base mt-4 max-w-xl mx-auto" style={{ color: "#666" }}>
            {t.comparisons.subhead}
          </p>
        </div>

        <div className="space-y-6">
          {t.comparisons.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{
                background: i === t.comparisons.items.length - 1
                  ? "rgba(0,229,255,0.03)"
                  : "rgba(255,255,255,0.02)",
                border: i === t.comparisons.items.length - 1
                  ? "1px solid rgba(0,229,255,0.12)"
                  : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <h3
                className="text-lg font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
