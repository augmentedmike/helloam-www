"use client";

import React from "react";
import { useLocale } from "@/context/locale-context";

const LANGUAGES = [
  { value: "en", label: "EN", name: "English" },
  { value: "es", label: "ES", name: "Español" },
  { value: "zh", label: "中文", name: "Chinese" },
  { value: "de", label: "DE", name: "Deutsch" },
  { value: "fr", label: "FR", name: "Français" },
  { value: "ko", label: "한국어", name: "Korean" },
] as const;

type Locale = "en" | "es" | "zh" | "de" | "fr" | "ko";

export default function Footer() {
  const { locale, setLocale } = useLocale();

  return (
    <footer
      className="px-6 py-12"
      style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/am-headshot.jpg"
              alt="Amelia"
              width={40}
              height={40}
              className="h-10 w-10 object-cover rounded-full flex-shrink-0"
              style={{ border: "1.5px solid rgba(0,229,255,0.3)" }}
            />
            <div className="text-center sm:text-left">
              <p className="font-semibold text-sm" style={{ color: "#f5f5f5" }}>HelloAm!</p>
              <p className="text-xs mt-1" style={{ color: "#a3a3a3" }}>
                Digital worker platform for PMs, developers, and support teams.
              </p>
              <p className="text-xs mt-1" style={{ color: "#6b6b6b" }}>
                Built in Austin, TX · Tylt LLC
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {[
              { label: "Compare",      href: "/compare",                                external: false },
              { label: "Press",        href: "/press",                                  external: false },
              { label: "Contact",      href: "/contact",                                external: false },
              { label: "GitHub",       href: "https://github.com/augmentedmike/am-agi", external: true  },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-xs font-medium transition-colors text-[#a3a3a3] hover:text-[#f5f5f5]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Legal + Language selector */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "#6b6b6b" }}>
            © 2026 Tylt LLC · Delaware · All rights reserved
          </p>
          <div className="flex items-center gap-4">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms",   href: "/terms" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs transition-colors text-[#6b6b6b] hover:text-[#a3a3a3]"
              >
                {l.label}
              </a>
            ))}
            <select
              value={locale}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setLocale(e.target.value as Locale)}
              className="rounded-lg px-3 py-1.5 text-xs bg-transparent border transition-colors hover:text-white"
              style={{ color: "#6b6b6b", borderColor: "rgba(255,255,255,0.12)" }}
              aria-label="Select language"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.value} value={lang.value} style={{ background: "#0a0a0a", color: "#f5f5f5" }}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}
