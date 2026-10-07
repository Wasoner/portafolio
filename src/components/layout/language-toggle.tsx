"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-surface/80 border border-line text-ash hover:text-ink hover:border-accent/40 transition-colors duration-200 cursor-pointer"
      title="Cambiar idioma / Switch language"
      aria-label="Cambiar idioma / Switch language"
    >
      <Globe className="w-3.5 h-3.5 text-ash group-hover:text-accent transition-colors" />
      <span className="font-mono text-[11px] tracking-wide">ES/EN</span>
    </button>
  );
}
