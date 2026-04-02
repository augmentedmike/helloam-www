"use client";

import { useState } from "react";
import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

const COLORS = ["#00E5FF", "#4A90D9", "#F5A623", "#4CAF50", "#E8006A", "#9B59B6"];

export default function Lifestyle() {
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh" | "de");
  const [active, setActive] = useState(0);

  const personas = t.lifestyle.personas.map((p, i) => ({
    ...p,
    color: COLORS[i] || "#00E5FF",
  }));

  const p = personas[active];

  return (
    <section id="personas" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
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

        {/* Tab nav + detail panel */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Left: role tabs */}
          <div className="flex flex-row md:flex-col gap-2 md:w-52 shrink-0 flex-wrap">
            {personas.map((persona, i) => (
              <button
                key={persona.role}
                onClick={() => setActive(i)}
                className="text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap"
                style={{
                  color: active === i ? persona.color : "rgba(255,255,255,0.35)",
                  background: active === i ? `${persona.color}12` : "transparent",
                  border: active === i ? `1px solid ${persona.color}35` : "1px solid transparent",
                }}
              >
                {persona.role}
              </button>
            ))}
          </div>

          {/* Right: detail */}
          <div
            key={active}
            className="flex-1 rounded-2xl p-8"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: `1px solid ${p.color}22`,
              boxShadow: `0 0 40px ${p.color}08`,
            }}
          >
            {/* Top accent */}
            <div
              className="h-[3px] rounded-full mb-8 w-12"
              style={{ background: p.color }}
            />

            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: p.color }}
            >
              {p.role}
            </p>

            <h3
              className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              {p.headline}
            </h3>

            <p className="text-sm leading-relaxed mb-4" style={{ color: "#666" }}>
              {p.pain}
            </p>

            <p className="text-base leading-relaxed mb-8" style={{ color: "#999" }}>
              {p.value}
            </p>

            <div className="flex flex-wrap gap-2">
              {p.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{
                    background: `${p.color}10`,
                    border: `1px solid ${p.color}28`,
                    color: p.color,
                  }}
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
