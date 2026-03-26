"use client";

import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

export default function SoulRestore() {
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh");

  return (
    <section
      className="relative px-6 py-24 overflow-hidden"
      style={{ background: "#060606", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      {/* Subtle glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,229,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p
          className="text-center text-xs font-semibold tracking-[0.25em] uppercase mb-6"
          style={{ color: "#00E5FF" }}
        >
          {t.soulRestore.eyebrow}
        </p>

        {/* Headline */}
        <h2
          className="text-center font-bold tracking-tight mb-8"
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.1,
            color: "#ffffff",
          }}
        >
          {t.soulRestore.headline1}{" "}
          <span style={{ color: "rgba(255,255,255,0.45)" }}>{t.soulRestore.headline2}</span>
        </h2>

        <p
          className="text-center text-lg leading-relaxed mb-16 max-w-2xl mx-auto"
          style={{ color: "#777777" }}
        >
          {t.soulRestore.subhead}
        </p>

        {/* Three pillars */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {t.soulRestore.pillars.map((p) => (
            <div
              key={p.label}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <h3
                className="text-base font-bold mb-3 text-white"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                {p.label}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#777777" }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Quote / closer */}
        <div
          className="rounded-2xl p-8 text-center"
          style={{
            background: "rgba(0,229,255,0.03)",
            border: "1px solid rgba(0,229,255,0.10)",
          }}
        >
          <p
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              color: "#ffffff",
              lineHeight: 1.2,
            }}
          >
            {t.soulRestore.closerHeadline1}
            <br />
            <span style={{ color: "#00E5FF" }}>{t.soulRestore.closerHeadline2}</span>
          </p>
          <p className="text-base" style={{ color: "#666666" }}>
            {t.soulRestore.closerBody}
          </p>
        </div>
      </div>
    </section>
  );
}
