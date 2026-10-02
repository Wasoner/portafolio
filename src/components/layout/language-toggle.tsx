"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-transparent border border-line text-ash hover:text-ink hover:border-accent/40 transition-colors duration-200 cursor-pointer"
      title={language === "es" ? "Switch to English" : "Cambiar a Español"}
      aria-label="Cambiar idioma / Switch language"
    >
      <Languages className="w-3.5 h-3.5 transition-colors duration-200 group-hover:text-accent" />
      <span className="tracking-wider uppercase font-mono">
        {language === "es" ? "ES" : "EN"}
      </span>
    </button>
  );
}
