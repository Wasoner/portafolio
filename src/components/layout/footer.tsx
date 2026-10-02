"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-line bg-canvas py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <a
            href="#hero"
            className="font-mono text-sm font-semibold text-ink hover:text-accent transition-colors tracking-tight"
          >
            {profile.brand}
            <span className="text-accent">{profile.brandSuffix}</span>
          </a>
          <span className="hidden sm:inline text-line">|</span>
          <p className="text-xs text-ash">
            {t.footer.builtWith}
          </p>
        </div>

        {/* Rights & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-ash">
            © {new Date().getFullYear()} {profile.fullName}. {t.footer.rights}
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-transparent border border-line text-ash hover:text-ink hover:border-accent/40 transition-colors cursor-pointer"
            title={t.footer.backToTop}
            aria-label={t.footer.backToTop}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
