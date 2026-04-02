"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { LOCALES, type Locale } from "@/lib/translations";

const VALID_LOCALES = Object.keys(LOCALES) as Locale[];

function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of langs) {
    const base = tag.split("-")[0].toLowerCase() as Locale;
    if (VALID_LOCALES.includes(base)) return base;
  }
  return "en";
}

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : null;
}

function detectGeoLocale(): Locale | null {
  const geo = readCookie("x-geo-locale") as Locale | null;
  if (geo && VALID_LOCALES.includes(geo)) return geo;
  return null;
}

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && VALID_LOCALES.includes(saved)) {
      // Explicit user preference always wins
      setLocale(saved);
    } else {
      // Browser language preference (from browser settings, not IP)
      const browser = detectBrowserLocale();
      // IP-based geo detection from Vercel middleware cookie
      const geo = detectGeoLocale();
      // Browser language takes priority over geo; geo is final fallback
      setLocale(browser !== "en" ? browser : (geo ?? "en"));
    }
    setMounted(true);
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  if (!mounted) {
    return children;
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale: handleSetLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    return { locale: "en" as Locale, setLocale: () => {} };
  }
  return context;
}
