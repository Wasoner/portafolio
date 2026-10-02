"use client";

import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import { es, Translations } from "@/locales/es";
import { en } from "@/locales/en";

export type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const isLanguage = (value: unknown): value is Language =>
  value === "es" || value === "en";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");

  // The server cannot know a visitor's saved preference, so the page prerenders
  // in Spanish and we adopt the stored/detected language right after hydration.
  // React bails out of the update when the resolved value is already "es", so
  // Spanish visitors (the default) never pay for a second render of the tree.
  useEffect(() => {
    const saved = localStorage.getItem("portfolio_lang");
    const detected = isLanguage(saved)
      ? saved
      : navigator.language.startsWith("es")
        ? "es"
        : "en";

    document.documentElement.lang = detected;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLanguageState((current) => (current === detected ? current : detected));
  }, []);

  const value = useMemo<LanguageContextType>(() => {
    const setLanguage = (lang: Language) => {
      setLanguageState(lang);
      if (typeof window !== "undefined") {
        localStorage.setItem("portfolio_lang", lang);
        document.documentElement.lang = lang;
      }
    };

    return {
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "es" ? "en" : "es"),
      t: language === "es" ? es : en,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
