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
  Terminal,
  CheckCircle2,
} from "lucide-react";

export function AboutSection() {
  const { t } = useLanguage();

  const highlightIcons = [Code, Server, Database, Cpu];

  return (
    <section id="about" className="py-20 sm:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-5 text-ash text-sm sm:text-base leading-relaxed"
          >
            <div className="space-y-4">
              <div className="bg-surface p-5 rounded-2xl border border-line text-ink">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono text-accent">
                  <Terminal className="w-4 h-4" />
                  <span>Ingeniero Civil en Informática · Titulado UBB</span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed">
                  {t.about.paragraph1}
                </p>
              </div>

              <p>{t.about.paragraph2}</p>
              <p>{t.about.paragraph3}</p>
            </div>

            {/* Quick Principles / Tech Badges */}
            <div className="pt-2">
              <span className="text-xs font-mono text-ash/80 block mb-2 uppercase">
                Principios & Competencias Clave
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Clean Architecture",
                  "Scrum & Sprints",
                  "APIs RESTful",
                  "Transbank Webpay",
                  "TypeScript",
                  "Java (Spring Boot / Javalin)",
                  "Python (FastAPI)",
                  "PostgreSQL / SQL Server / MySQL",
                  "Docker",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded-lg bg-surface-2 text-ash border border-line"
                  >
                    <CheckCircle2 className="w-3 h-3 text-accent" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.about.highlights.map((item, idx) => {
              const IconComponent = highlightIcons[idx] || Code;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                >
                  <Card interactive className="h-full flex flex-col p-5 bg-surface">
                    <div className="w-9 h-9 rounded-xl bg-surface-2 border border-line flex items-center justify-center text-accent mb-3.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-ink mb-1.5">
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
