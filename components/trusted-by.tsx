"use client";

import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

export default function TrustedBy() {
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh");
  const sp = t.socialProof;

  return (
    <section className="px-6 py-16" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-6" style={{ color: "#555" }}>
          {sp.eyebrow}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          {sp.logos.map((logo: { name: string }, i: number) => (
            <span key={i} className="text-sm font-medium" style={{ color: "#444" }}>
              {logo.name}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sp.stats.map((s: { value: string; label: string }, i: number) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                {s.value}
              </p>
              <p className="text-sm mt-1" style={{ color: "#555" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
