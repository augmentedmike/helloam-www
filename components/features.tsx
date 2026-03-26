"use client";

import { useState } from "react";
import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

type Category = "pm" | "dev" | "support" | "all";

const ACCENTS: Record<Category, string> = {
  pm:      "#00E5FF",
  dev:     "#4A90D9",
  support: "#F5A623",
  all:     "#00E5FF",
};

// Per-feature accent colors and categories (structural data, not translatable)
const FEATURE_META: { accent: string; categories: Category[] }[] = [
  { accent: "#00E5FF", categories: ["pm"] },
  { accent: "#00E5FF", categories: ["pm"] },
  { accent: "#00BCD4", categories: ["pm"] },
  { accent: "#4A90D9", categories: ["pm"] },
  { accent: "#00E5FF", categories: ["pm"] },
  { accent: "#9B59B6", categories: ["pm"] },
  { accent: "#4A90D9", categories: ["dev"] },
  { accent: "#4A90D9", categories: ["dev"] },
  { accent: "#CC2200", categories: ["dev"] },
  { accent: "#4A90D9", categories: ["dev"] },
  { accent: "#00BCD4", categories: ["dev"] },
  { accent: "#9B59B6", categories: ["dev"] },
  { accent: "#F5A623", categories: ["support"] },
  { accent: "#F5A623", categories: ["support"] },
  { accent: "#E8006A", categories: ["support"] },
  { accent: "#F5A623", categories: ["support"] },
  { accent: "#00E5FF", categories: ["support"] },
  { accent: "#4A90D9", categories: ["support"] },
  { accent: "#00E5FF", categories: [] },
  { accent: "#9B59B6", categories: [] },
  { accent: "#4A90D9", categories: [] },
  { accent: "#F5A623", categories: [] },
];

export default function Features() {
  const [active, setActive] = useState<Category>("pm");
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh");

  const TABS: { id: Category; label: string }[] = [
    { id: "pm",      label: t.features.tabs.pm      },
    { id: "dev",     label: t.features.tabs.dev     },
    { id: "support", label: t.features.tabs.support },
    { id: "all",     label: t.features.tabs.all     },
  ];

  const FEATURES = t.features.items.map((item, i) => ({
    ...item,
    ...FEATURE_META[i],
  }));

  return (
    <section id="features" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#00E5FF" }}
          >
            {t.features.eyebrow}
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            {t.features.headline}
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#888888" }}>
            {t.features.subhead}
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex items-center justify-center gap-1 mb-12 flex-wrap">
          {TABS.map((tab, i) => {
            const isActive = active === tab.id;
            const accentColor = ACCENTS[tab.id];
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className="relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200"
                style={{
                  color: isActive ? accentColor : "rgba(255,255,255,0.4)",
                  background: isActive ? `${accentColor}18` : "transparent",
                  border: isActive
                    ? `1px solid ${accentColor}44`
                    : "1px solid transparent",
                }}
              >
                {tab.label}
                {i < TABS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-[3px] top-1/2 -translate-y-1/2 text-xs select-none pointer-events-none"
                    style={{ color: "rgba(255,255,255,0.15)" }}
                  >
                    |
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => {
            const visible =
              active === "all" ||
              (feature.categories.length > 0 && feature.categories.includes(active));
            return (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  display: visible ? undefined : "none",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${feature.accent}33`;
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    `${feature.accent}44`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 1px 3px rgba(0,0,0,0.3)";
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(255,255,255,0.07)";
                }}
              >
                {/* Top accent bar */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: feature.accent, opacity: 0.85 }}
                />

                {/* Subtle background glow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 0% 0%, ${feature.accent}0D 0%, transparent 65%)`,
                  }}
                />

                <div className="relative z-10 p-6 flex flex-col h-full">
                  {/* Stat + index */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{
                        color: feature.accent,
                        background: `${feature.accent}18`,
                        border: `1px solid ${feature.accent}30`,
                      }}
                    >
                      {feature.stat}
                    </span>
                    <span
                      className="text-xs font-mono font-bold tabular-nums"
                      style={{ color: "rgba(255,255,255,0.12)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-bold text-white mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                    {feature.title}
                  </h3>

                  {/* Body */}
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#777777" }}>
                    {feature.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
