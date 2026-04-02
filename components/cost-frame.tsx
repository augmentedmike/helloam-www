"use client";

import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

export default function CostFrame() {
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh" | "de");
  const cf = t.costFrame;

  return (
    <section className="px-6 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "#00E5FF" }}>
          {cf.eyebrow}
        </p>
        <h2 className="text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
          {cf.headline}
        </h2>
        <p className="text-base max-w-xl mx-auto mb-14" style={{ color: "#666" }}>
          {cf.subhead}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* AM cost */}
          <div
            className="rounded-2xl p-8 flex flex-col items-center gap-3"
            style={{ background: "rgba(0,229,255,0.04)", border: "1px solid rgba(0,229,255,0.2)" }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#00E5FF" }}>
              {cf.aiCostLabel}
            </p>
            <p className="text-4xl font-bold text-white" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              {cf.aiCost}
            </p>
            <p className="text-sm text-center" style={{ color: "#555" }}>{cf.aiCostNote}</p>
          </div>

          {/* Per hire */}
          <div
            className="rounded-2xl p-8 flex flex-col items-center gap-3"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#888" }}>
              {cf.hiringCostLabel}
            </p>
            <p className="text-4xl font-bold" style={{ color: "#888", fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              {cf.hiringCost}
            </p>
            <p className="text-sm text-center" style={{ color: "#555" }}>{cf.hiringCostNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
