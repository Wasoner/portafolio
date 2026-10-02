"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { experienceData } from "@/data/experience";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Calendar, Building } from "lucide-react";

export function ExperienceSection() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  const filteredItems = experienceData.filter((item) => item.type === activeTab);

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3"
          >
            <Badge variant="accent">{t.experience.badge}</Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight mb-4"
          >
            {t.experience.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-ash text-base"
          >
            {t.experience.subtitle}
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <button
            onClick={() => setActiveTab("work")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer border ${
              activeTab === "work"
                ? "bg-accent/10 text-accent border-accent/30"
                : "bg-transparent text-ash border-line hover:text-ink hover:border-accent/40"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>{t.experience.workTab}</span>
          </button>

          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer border ${
              activeTab === "education"
                ? "bg-accent/10 text-accent border-accent/30"
                : "bg-transparent text-ash border-line hover:text-ink hover:border-accent/40"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>{t.experience.educationTab}</span>
          </button>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-line space-y-10">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, idx) => {
              const role = item.role[language] || item.role.es;
              const period = item.period[language] || item.period.es;
              const description = item.description[language] || item.description.es;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.35, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-canvas border-2 border-line group-hover:border-accent transition-colors" />

                  {/* Item Content Card */}
                  <Card interactive className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-ink">
                        {role}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-md border border-accent/20">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{period}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-ash mb-3 font-medium">
                      <Building className="w-3.5 h-3.5" />
                      <span>{item.organization}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-ash leading-relaxed mb-4">
                      {description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-surface-2 text-ash border border-line"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
