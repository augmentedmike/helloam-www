import en from "@/i18n/en.json";
import es from "@/i18n/es.json";
import zh from "@/i18n/zh.json";
import de from "@/i18n/de.json";
import fr from "@/i18n/fr.json";
import ko from "@/i18n/ko.json";

type Locale = "en" | "es" | "zh" | "de" | "fr" | "ko";

const translations = {
  en,
  es,
  zh,
  de,
  fr,
  ko,
};

export function getTranslation(locale: Locale) {
  return translations[locale] || translations["en"];
}

export function t(locale: Locale, path: string) {
  const translation = getTranslation(locale);
  return path.split(".").reduce((obj: any, key) => obj?.[key], translation);
}
