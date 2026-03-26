"use client";

import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

export default function Lifestyle() {
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh");

  const PERSONAS = t.lifestyle.personas.map((p, i) => {
    const colors = ["#00E5FF", "#4A90D9", "#F5A623"];
    return { ...p, color: colors[i] || "#00E5FF" };
  });

  return (
    <section id="personas" className="px-6 py-24 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <p
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
          style={{ color: "#00E5FF" }}
        >
          {t.lifestyle.eyebrow}
        </p>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          {t.lifestyle.headline1}
          <br />
          <span style={{ color: "#00E5FF" }}>{t.lifestyle.headline2}</span>
        </h2>
      </div>

      {/* Persona cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PERSONAS.map((p) => (
          <div
            key={p.role}
            className="group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = `${p.color}44`;
              (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${p.color}22`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
              style={{ background: p.color, opacity: 0.9 }}
            />

            {/* Role badge */}
            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-6"
              style={{ background: `${p.color}15`, border: `1px solid ${p.color}35`, color: p.color }}
            >
              {p.role}
            </div>

            {/* Headline */}
            <h3
              className="text-xl font-bold text-white mb-3 leading-snug"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              {p.headline}
            </h3>

            {/* Pain point */}
            <p className="text-sm mb-5 leading-relaxed" style={{ color: "#666" }}>
              {p.pain}
            </p>

            {/* Value prop */}
            <p className="text-sm mb-6 leading-relaxed" style={{ color: "#999" }}>
              {p.value}
            </p>

            {/* Capabilities */}
            <div className="flex flex-wrap gap-2">
              {p.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#888",
                  }}
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
