"use client";

import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

export default function UseCases() {
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh" | "de");
  const uc = t.useCases;

  return (
    <section className="px-6 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "#00E5FF" }}>
            {uc.eyebrow}
          </p>
          <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
            {uc.headline}
          </h2>
          <p className="text-base mt-4 max-w-xl mx-auto" style={{ color: "#666" }}>
            {uc.subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {uc.roles.map((role: { persona: string; forRole: string; task: string; outcome: string }, i: number) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#00E5FF" }}>
                  {role.persona}
                </p>
                <p className="text-sm" style={{ color: "#555" }}>for {role.forRole}</p>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#888" }}>
                {role.task}
              </p>
              <div
                className="rounded-xl px-4 py-3 text-sm font-medium"
                style={{ background: "rgba(0,229,255,0.06)", border: "1px solid rgba(0,229,255,0.15)", color: "#00E5FF" }}
              >
                {role.outcome}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
