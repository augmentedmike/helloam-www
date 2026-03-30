"use client";

import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

export default function HeroChat() {
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh");

  return (
    <section className="relative px-6 py-24 overflow-hidden">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 70% 50%, rgba(74,144,217,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div>
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#4A90D9" }}
          >
            {t.heroChat.eyebrow}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-white mb-6"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            {t.heroChat.headline1}{" "}
            <span style={{ color: "#4A90D9" }}>
              {t.heroChat.headline2}
            </span>
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed mb-8"
            style={{ color: "#777" }}
          >
            {t.heroChat.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://github.com/augmentedmike/am-agi"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-100"
              style={{ background: "#4A90D9", color: "#fff", boxShadow: "0 0 32px rgba(74,144,217,0.25)" }}
            >
              {t.heroChat.cta}
            </a>
          </div>
        </div>

        {/* Right: chat screenshot */}
        <div className="relative">
          {/* Glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-4 pointer-events-none rounded-3xl"
            style={{
              background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(74,144,217,0.08) 0%, transparent 70%)",
            }}
          />
          {/* Browser chrome frame */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0 0 0 1px rgba(74,144,217,0.15), 0 24px 64px rgba(0,0,0,0.5), 0 0 40px rgba(74,144,217,0.07)",
            }}
          >
            {/* Chrome top bar */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#28CA41" }} />
              <div
                className="flex-1 mx-4 h-6 rounded-md flex items-center justify-center text-xs"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  color: "#555",
                  maxWidth: 240,
                  margin: "0 auto",
                }}
              >
                helloam.bot
              </div>
            </div>
            {/* Screenshot */}
            <img
              src="/hero-2-chat.jpg"
              alt="AM Chat — asking AM to analyze screenshots and create cards, AM responds in real time"
              className="w-full block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
