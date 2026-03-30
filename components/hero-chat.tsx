"use client";

import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

export default function HeroChat() {
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh");

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Chat screenshot — full background */}
      <div className="absolute inset-0">
        <img
          src="/hero-2-chat.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-right-top"
        />
        {/* Left gradient — text readable over screenshot */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #0a0a0a 28%, rgba(10,10,10,0.75) 42%, rgba(10,10,10,0.15) 58%, transparent 72%)",
          }}
        />
        {/* Top + bottom fades */}
        <div className="absolute inset-x-0 top-0 h-32" style={{ background: "linear-gradient(to bottom, #0a0a0a, transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-32" style={{ background: "linear-gradient(to top, #0a0a0a, transparent)" }} />
      </div>

      {/* Text — left side over gradient */}
      <div className="relative z-10 px-8 sm:px-16 py-24 max-w-xl">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "#4A90D9" }}>
          {t.heroChat.eyebrow}
        </p>
        <h2
          className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white mb-6"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          {t.heroChat.headline1}
          <br />
          <span style={{ color: "#4A90D9" }}>{t.heroChat.headline2}</span>
        </h2>
        <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: "#777" }}>
          {t.heroChat.body}
        </p>
        <a
          href="https://github.com/augmentedmike/am-agi"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-100"
          style={{ background: "#4A90D9", color: "#fff", boxShadow: "0 0 32px rgba(74,144,217,0.25)" }}
        >
          {t.heroChat.cta}
        </a>
      </div>
    </section>
  );
}
