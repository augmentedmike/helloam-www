"use client";

import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

export default function Manifesto() {
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh" | "de");

  return (
    <section className="relative px-6 py-40 overflow-hidden">
      {/* Background — deep dark with radial teal pulse */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 90% at 50% 50%, rgba(0,229,255,0.06) 0%, rgba(0,229,255,0.01) 45%, rgba(0,0,0,0) 70%), #080808",
        }}
      />

      {/* Noise texture overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Thin top border accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: "120px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #00E5FF, transparent)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2
          className="font-bold leading-[1.08] tracking-[-0.03em] text-center mb-20"
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
          }}
        >
          <span style={{ color: "#ffffff" }}>{t.manifesto.headline1}</span>
          <br />
          <span style={{ color: "rgba(255,255,255,0.55)" }}>{t.manifesto.headline2}</span>
        </h2>

        <div
          className="space-y-7"
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "1.125rem",
            lineHeight: "1.8",
          }}
        >
          <p style={{ color: "#888" }}>{t.manifesto.p1}</p>

          <p
            className="font-semibold"
            style={{ color: "#ffffff", fontSize: "1.25rem", letterSpacing: "-0.01em" }}
          >
            {t.manifesto.p2}
          </p>

          <p style={{ color: "#999" }}>{t.manifesto.p3}</p>

          <p style={{ color: "#999" }}>{t.manifesto.p4}</p>

          {/* Worker framing highlight */}
          <div
            className="rounded-xl p-7 my-10"
            style={{
              background: "rgba(0,229,255,0.03)",
              border: "1px solid rgba(0,229,255,0.10)",
              borderLeft: "3px solid #00E5FF",
            }}
          >
            <h3 className="font-semibold mb-3" style={{ color: "#ffffff", fontSize: "1.05rem" }}>
              {t.manifesto.contextHeadline}
            </h3>
            <p style={{ color: "#888" }}>{t.manifesto.contextBody}</p>
            <p className="font-semibold mt-3" style={{ color: "#dddddd" }}>
              {t.manifesto.contextCloser}
            </p>
          </div>

          <p style={{ color: "#999" }}>{t.manifesto.p5}</p>
        </div>

        {/* Differentiators callout */}
        <div
          className="rounded-2xl px-8 py-7 my-12"
          style={{ background: "rgba(0,229,255,0.04)", border: "1px solid rgba(0,229,255,0.15)" }}
        >
          <p className="font-bold mb-4" style={{ fontSize: "1.1rem", color: "#ffffff" }}>
            {t.manifesto.diffTitle}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {t.manifesto.differentiators.map((d) => (
              <div key={d.label} className="flex gap-3">
                <div className="w-1 shrink-0 rounded-full mt-1" style={{ background: "#00E5FF", minHeight: "20px" }} />
                <div>
                  <p className="text-sm font-semibold text-white">{d.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#666" }}>{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
