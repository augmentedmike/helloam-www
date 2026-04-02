import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Map Vercel geo country codes to supported locales.
// Used as a fallback when the browser has no language preference set.
const COUNTRY_LOCALE: Record<string, string> = {
  // Spanish-speaking countries
  ES: "es", MX: "es", AR: "es", CO: "es", PE: "es", VE: "es",
  CL: "es", EC: "es", GT: "es", CU: "es", BO: "es", DO: "es",
  HN: "es", PY: "es", SV: "es", NI: "es", CR: "es", PA: "es",
  UY: "es",
  // Chinese-speaking countries/regions
  CN: "zh", TW: "zh", HK: "zh", MO: "zh",
  // German-speaking countries
  DE: "de", AT: "de", CH: "de", LI: "de",
  // French-speaking countries
  FR: "fr", BE: "fr", LU: "fr", MC: "fr",
  // Korean-speaking countries
  KR: "ko",
};

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  // Vercel provides request.geo on edge; geo is undefined in local dev (no-op)
  const country = (request as any).geo?.country as string | undefined;
  if (country) {
    response.cookies.set("x-geo-country", country, {
      path: "/",
      maxAge: 3600,
      sameSite: "lax",
    });
    const locale = COUNTRY_LOCALE[country];
    if (locale) {
      response.cookies.set("x-geo-locale", locale, {
        path: "/",
        maxAge: 3600,
        sameSite: "lax",
      });
    }
  }
  return response;
}

export const config = {
  // Run on all pages except static assets
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
