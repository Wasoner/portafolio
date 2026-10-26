"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
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
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="mb-3"
          >
            <Badge variant="accent">{t.skills.badge}</Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight mb-3"
          >
            {t.skills.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="text-ash text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            {t.skills.subtitle}
          </motion.p>
        </div>

        {/* Domain Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skillsData.map((category, idx) => {
            const Icon = categoryIcons[category.id];
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="h-full"
              >
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
