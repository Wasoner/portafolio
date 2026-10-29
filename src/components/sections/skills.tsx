"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { skillsData, SkillCategoryId } from "@/data/skills";
import {
  Monitor,
  Server,
  Database,
  Container,
  Workflow,
  LucideIcon,
} from "lucide-react";

/**
 * Tech stack section.
 *
 * Data-driven from `src/data/skills.ts`: flat domain cards with chips, no
 * progress bars or arbitrary proficiency percentages — those invite doubt in
 * technical reviews and date quickly.
 */
const categoryIcons: Record<SkillCategoryId, LucideIcon> = {
  frontend: Monitor,
  backend: Server,
  databases: Database,
  devops: Container,
  methodology: Workflow,
};

export function SkillsSection() {
  const { t, language } = useLanguage();

  return (
    <section id="skills" className="py-20 sm:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-line" aria-hidden />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ash">
              {t.skills.badge}
            </span>
            <span className="h-px w-10 bg-line" aria-hidden />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight mb-3">
              {t.skills.title}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-ash text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              {t.skills.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Domain Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skillsData.map((category, idx) => {
            const Icon = categoryIcons[category.id];
            return (
              <Reveal key={category.id} delay={idx * 0.06} className="h-full">
                <Card interactive className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-xl bg-surface-2 border border-line flex items-center justify-center text-accent shrink-0"
                      aria-hidden
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-ink">
                      {category.title[language]}
                    </h3>
                  </div>

                  <ul className="flex flex-wrap gap-2" aria-label={category.title[language]}>
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-surface-2 text-ink border border-line"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
