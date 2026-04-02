"use client";

import WaitlistForm from "./waitlist-form";
import { usePersonalization } from "@/context/personalization-context";
import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

export default function Waitlist() {
  const { name } = usePersonalization();
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh" | "de");

  return (
    <section id="waitlist" className="relative px-6 py-24 overflow-hidden">
      <div className="relative z-10 max-w-xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "#00E5FF" }}>
            {t.waitlist.eyebrow}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            {t.waitlist.headline}
          </h2>
          <p className="text-base" style={{ color: "#888" }}>
            {t.waitlist.subhead.replace("{name}", name || "your")}
          </p>
        </div>

        <WaitlistForm />
      </div>
    </section>
  );
}
