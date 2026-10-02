"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Code,
  Server,
  Database,
  Cpu,
  Sparkles,
} from "lucide-react";

export function AboutSection() {
  const { t } = useLanguage();

  const highlightIcons = [Code, Server, Database, Cpu];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3"
          >
            <Badge variant="accent">{t.about.badge}</Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight leading-tight"
          >
            {t.about.title}
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-5 text-ash text-base sm:text-lg leading-relaxed"
          >
            <p className="bg-surface p-4 rounded-xl border border-line text-ink">
              {t.about.paragraph1}
            </p>
            <p>{t.about.paragraph2}</p>
            <p>{t.about.paragraph3}</p>

            {/* Quick Principles / Tags */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              {[
                "Clean Code",
                "Scrum",
                "REST APIs",
                "Responsive UI",
                "TypeScript",
                "Java",
                "MySQL",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-surface-2 text-ash border border-line"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.about.highlights.map((item, idx) => {
              const IconComponent = highlightIcons[idx] || Sparkles;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Card interactive className="h-full flex flex-col p-5">
                    <div className="w-10 h-10 rounded-xl bg-surface-2 border border-line flex items-center justify-center text-accent mb-4">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-ink mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-ash leading-relaxed">
                      {item.desc}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
