"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { ArrowRight, Mail, Terminal, Layers, Heart, Copy, Check } from "lucide-react";

/**
 * Technical Hero:
 * Incluye propuesta de valor nítida, CTAs directos, redes y una
 * terminal técnica interactiva mate que exhibe stack real, patrones
 * de arquitectura y principios de ingeniería.
 */
export function HeroSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = React.useState<"stack" | "architecture" | "philosophy">("stack");
  const [copied, setCopied] = React.useState(false);

  const socialLinks = [
    { name: "GitHub", href: profile.github, icon: GithubIcon, label: "GitHub" },
    { name: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
    { name: "Email", href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
  ];

  const terminalTabs = [
    { id: "stack" as const, label: t.hero.terminal.tabStack, icon: Terminal },
    { id: "architecture" as const, label: t.hero.terminal.tabArchitecture, icon: Layers },
    { id: "philosophy" as const, label: t.hero.terminal.tabPhilosophy, icon: Heart },
  ];

  const codeSnippets = {
    stack: `{
  "engineer": "Cristóbal Rivas Paul",
  "title": "Ingeniero Civil en Informática",
  "core_stack": {
    "backend": ["Java 21 (Spring Boot, Javalin)", "Python (FastAPI)", "PHP"],
    "frontend": ["React", "Next.js 16", "React Native", "Angular", "TypeScript"],
    "persistence": ["PostgreSQL 16", "MySQL 8.0", "SQL Server", "MongoDB 7"],
    "infrastructure": ["Docker", "Linux", "CI/CD Pipelines", "Git Flow"]
  },
  "focus": "High-availability APIs, clean layered architectures & business SaaS"
}`,
    architecture: `# Architectural Blueprint & Standards
patterns:
  - Clean Architecture & Layered Domain Design
  - Domain-Driven Design (DDD) modular boundaries
  - Multi-tenant tenant-isolation relational modeling
  - RESTful API specification with strict OpenAPI / Swagger
security:
  - JWT token validation & claims verification
  - BCrypt cryptographic salted hashing
  - Database defense-in-depth with CHECK & UNIQUE constraints
performance:
  - Connection pooling with HikariCP
  - Query indexing & asynchronous task processing`,
    philosophy: `## Engineering Principles

1. Code for maintainability: readability precedes cleverness.
2. Architecture for resilience: fail gracefully, log meaningfully.
3. Measure before optimizing: benchmark bottlenecks, don't guess.
4. Business impact first: technology exists to solve real human problems.
5. Continuous refinement: strict typing, automated test suites and agile iterations.`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center py-20 sm:py-28"
    >
      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-ink mb-6 leading-[1.12]"
        >
          {t.hero.greeting} <span className="text-ink">{t.hero.name}</span>
        </motion.h1>

        {/* Subtitle / Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="text-base sm:text-lg text-ash max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.22 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-10"
        >
          <a href="#projects" className="group">
            <Button size="lg" variant="primary">
              <span>{t.hero.viewProjects}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href={`mailto:${profile.email}?subject=Contacto%20Profesional`}>
            <Button size="lg" variant="secondary">
              <Mail className="w-4 h-4" />
              <span>{t.hero.contactMe}</span>
            </Button>
          </a>
          <a
            href="/cv.pdf"
            download="CV-Cristobal-Rivas-Paul.pdf"
            className="inline-block"
          >
            <Button size="lg" variant="outline">
              <span>{t.hero.downloadCV}</span>
            </Button>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.28 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono text-ash bg-surface border border-line hover:text-ink hover:border-accent/40 transition-colors duration-200"
                aria-label={social.name}
              >
                <Icon className="w-4 h-4" />
                <span>{social.label}</span>
              </a>
            );
          })}
        </motion.div>

        {/* Technical Interactive Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="w-full text-left rounded-2xl bg-surface border border-line overflow-hidden shadow-2xl shadow-black/40"
        >
          {/* Terminal Window Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-surface-2 border-b border-line select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 inline-block" />
              <span className="ml-2 text-xs font-mono text-ash/80 hidden sm:inline">
                {t.hero.terminal.terminalTitle}
              </span>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1">
              {terminalTabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer border ${
                      isActive
                        ? "bg-canvas text-accent border-line"
                        : "bg-transparent text-ash hover:text-ink border-transparent"
                    }`}
                  >
                    <TabIcon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}

              {/* Copy snippet button */}
              <button
                onClick={handleCopy}
                className="p-1.5 rounded-lg text-ash hover:text-ink hover:bg-canvas transition-colors ml-1 cursor-pointer"
                title="Copiar contenido"
                aria-label="Copiar contenido"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Terminal Code Body */}
          <div className="p-4 sm:p-5 bg-canvas font-mono text-xs sm:text-sm text-ink/90 overflow-x-auto leading-relaxed max-h-[320px]">
            <pre className="whitespace-pre">
              <code>{codeSnippets[activeTab]}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
