"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, setLocale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh");

  const navLinks = [
    { label: t.nav.forPMs, href: "#personas" },
    { label: t.nav.forDevs, href: "#personas" },
    { label: t.nav.forSupport, href: "#personas" },
    { label: t.nav.help, href: "#support" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        padding: scrolled ? "0.625rem 0" : "1rem 0",
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/am-headshot.jpg"
            alt="Am"
            width={32}
            height={32}
            className="h-8 w-8 object-cover rounded-full"
            style={{ border: "1.5px solid rgba(0,229,255,0.4)" }}
          />
          <span
            className="font-bold tracking-tight transition-all duration-300"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: scrolled ? "1rem" : "1.125rem",
              color: "#ffffff",
            }}
          >
            helloam<span style={{ color: "#00E5FF" }}>.</span>bot
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm transition-colors hover:text-white"
              style={{ color: "#888" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as "en" | "es" | "zh")}
            className="rounded-lg px-3 py-2 text-sm transition-colors hover:text-white bg-transparent border"
            style={{ color: "#888", borderColor: "rgba(255,255,255,0.12)" }}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="zh">中文</option>
          </select>
          <a
            href="/demo"
            className="rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:text-white"
            style={{ color: "#888", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            {t.nav.requestDemo}
          </a>
          <a
            href="https://github.com/augmentedmike/am-agi"
            className="rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
            style={{ background: "#00E5FF", color: "#000" }}
          >
            {t.nav.getEarlyAccess}
          </a>
        </div>

        <button
          className="flex items-center justify-center text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(10,10,10,0.95)",
            backdropFilter: "blur(16px)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-white/5"
                style={{ color: "#aaa" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t pt-4" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <select
                value={locale}
                onChange={(e) => setLocale(e.target.value as "en" | "es" | "zh")}
                className="rounded-lg px-4 py-2.5 text-sm bg-transparent border text-center"
                style={{ color: "#888", borderColor: "rgba(255,255,255,0.12)" }}
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="zh">中文</option>
              </select>
              <a
                href="/demo"
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-center"
                style={{ color: "#888", border: "1px solid rgba(255,255,255,0.12)" }}
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.requestDemo}
              </a>
              <a
                href="https://github.com/augmentedmike/am-agi"
                className="rounded-lg px-4 py-2.5 text-sm font-semibold text-center"
                style={{ background: "#00E5FF", color: "#000" }}
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.getEarlyAccess}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
