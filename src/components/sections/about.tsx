"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { aboutContent } from "@/data/about";

/**
 * About section — two structured paragraphs sourced from `src/data/about.ts`.
 * Presentation only: no narrative copy is hardcoded here.
 */
export function AboutSection() {
  const { t, language } = useLanguage();

  const [paragraph1, paragraph2] = aboutContent.paragraphs;

  return (
    <section id="about" className="py-20 sm:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-line" aria-hidden />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ash">
              {t.about.badge}
            </span>
            <span className="h-px w-10 bg-line" aria-hidden />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight leading-tight">
              {t.about.title}
            </h2>
          </Reveal>
        </div>

        {/* Two structured paragraphs */}
        <Reveal className="max-w-4xl mx-auto space-y-5">
          <p className="text-base sm:text-lg leading-relaxed text-ink">
            {paragraph1[language]}
          </p>

          <Card className="p-5 sm:p-6 bg-surface">
            <p className="text-sm sm:text-base leading-relaxed text-ash">
              {paragraph2[language]}
            </p>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
