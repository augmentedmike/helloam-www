import en from "@/i18n/en.json";
import es from "@/i18n/es.json";
import zh from "@/i18n/zh.json";

type Locale = "en" | "es" | "zh";

const translations = {
  en,
  es,
  zh,
};

export function getTranslation(locale: Locale) {
  return translations[locale] || translations["en"];
}

export function t(locale: Locale, path: string) {
  const translation = getTranslation(locale);
  return path.split(".").reduce((obj: any, key) => obj?.[key], translation);
}
