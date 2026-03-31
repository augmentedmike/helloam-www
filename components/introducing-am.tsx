"use client";

import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

export default function IntroducingAm() {
  const { locale } = useLocale();
  const t = getTranslation(locale);

  return (
    <section
      className="px-6 py-24"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Photo */}
        <div className="flex-shrink-0">
          <img
            src="/am-headshot.jpg"
            alt="Amelia — AM"
            width={280}
            height={280}
            className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-2xl"
            style={{
              border: "1px solid rgba(0,229,255,0.2)",
              boxShadow: "0 0 40px rgba(0,229,255,0.08)",
            }}
          />
        </div>

        {/* Copy */}
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#00E5FF" }}
          >
            {t.introducingAm.eyebrow}
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-4"
            style={{ color: "#f5f5f5", fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            {t.introducingAm.heading}
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#a3a3a3" }}>
            {t.introducingAm.body1}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#a3a3a3" }}>
            {t.introducingAm.body2}
          </p>
        </div>
      </div>
    </section>
  );
}
