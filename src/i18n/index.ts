import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "./fr.json";
import ar from "./ar.json";
import en from "./en.json";

export const LANGS = ["fr", "ar", "en"] as const;
export type Lang = (typeof LANGS)[number];
export const RTL_LANGS: Lang[] = ["ar"];

const STORAGE_KEY = "abauto_lang";

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && LANGS.includes(saved)) return saved;
  } catch {
    /* storage unavailable */
  }
  return "fr";
}

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    ar: { translation: ar },
    en: { translation: en },
  },
  lng: initialLang(),
  fallbackLng: "fr",
  interpolation: { escapeValue: false },
  returnObjects: true,
});

export function applyLang(lang: Lang) {
  const dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", dir);
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
}

// apply on load
applyLang(i18n.language as Lang);

export default i18n;
