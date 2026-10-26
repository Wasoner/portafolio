"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
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
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="mb-3"
          >
            <Badge variant="accent">{t.about.badge}</Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight leading-tight"
          >
            {t.about.title}
          </motion.h2>
        </div>

        {/* Two structured paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto space-y-5"
        >
          <p className="text-base sm:text-lg leading-relaxed text-ink">
            {paragraph1[language]}
          </p>

          <Card className="p-5 sm:p-6 bg-surface">
            <p className="text-sm sm:text-base leading-relaxed text-ash">
              {paragraph2[language]}
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
