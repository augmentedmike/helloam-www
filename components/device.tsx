"use client";

import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

const STEP_COLORS = ["#00E5FF", "#4A90D9", "#F5A623"];

export default function Device() {
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh");

  const STEPS = t.device.steps.map((step, i) => ({
    ...step,
    color: STEP_COLORS[i] || "#00E5FF",
  }));

  return (
    <section id="how-it-works" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "#00E5FF" }}>
          {t.device.eyebrow}
        </p>
        <h2
          className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          {t.device.headline1}
          <br />
          <span style={{ color: "#00E5FF" }}>{t.device.headline2}</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#777777" }}>
          {t.device.subhead}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="relative rounded-2xl p-8"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Step number */}
            <div
              className="text-6xl font-bold mb-6 select-none"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                color: `${step.color}20`,
                lineHeight: 1,
              }}
            >
              {step.number}
            </div>

            <h3
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              {step.title}
            </h3>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "#777" }}>
              {step.body}
            </p>

            <div className="flex flex-wrap gap-2">
              {step.detail.map((d) => (
                <span
                  key={d}
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: `${step.color}12`,
                    border: `1px solid ${step.color}25`,
                    color: step.color,
                  }}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Trust signals */}
      <div
        className="rounded-2xl px-8 py-7 grid sm:grid-cols-3 gap-6 text-center"
        style={{ background: "rgba(0,229,255,0.03)", border: "1px solid rgba(0,229,255,0.10)" }}
      >
        {t.device.trustStats.map((s) => (
          <div key={s.label}>
            <p
              className="text-2xl font-bold mb-1"
              style={{ color: "#00E5FF", fontFamily: "var(--font-space-grotesk)" }}
            >
              {s.stat}
            </p>
            <p className="text-xs" style={{ color: "#666" }}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
