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
      className="relative min-h-[92vh] flex items-center justify-center py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-60 z-0"
      />

      {/* Ambient Gradient Glows (Left soft blue orb, Right purple/cyan orb) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -left-20 w-[420px] h-[420px] bg-blue-600/15 rounded-full blur-[130px] z-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 -right-24 w-[480px] h-[480px] bg-purple-600/18 rounded-full blur-[140px] z-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 right-10 w-[360px] h-[360px] bg-emerald-500/12 rounded-full blur-[120px] z-0"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Subtitle, CTAs & Social Links */}
          <div className="lg:col-span-6 text-left">
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.08]"
            >
              Hola, soy Cristóbal
              <br />
              Rivas Paul
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="text-base sm:text-lg text-ash max-w-xl mb-9 leading-relaxed font-normal"
            >
              Ingeniero Civil en Informática & Desarrollador Full Stack, por la arquitectura limpia, las soluciones tecnológicas escalables y la ingeniería de alto impacto.
            </motion.p>

            {/* Call to Actions (Primary pill + Outline CV pill) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.16 }}
              className="flex flex-wrap items-center gap-3.5 mb-8"
            >
              <a href="#projects" className="group">
                <button className="px-5 py-2.5 rounded-xl text-sm font-medium bg-[#5b51d8] hover:bg-[#685ff0] text-white flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-indigo-950/40">
                  <span>Ver Proyectos</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </a>
              <a
                href="/cv.pdf"
                download="CV-Cristobal-Rivas-Paul.pdf"
                className="inline-block"
              >
                <button className="px-5 py-2.5 rounded-xl text-sm font-medium bg-transparent border border-line hover:border-ash/60 text-ash hover:text-white transition-all cursor-pointer">
                  <span>Descargar CV</span>
                </button>
              </a>
            </motion.div>

            {/* Social Links (GitHub, LinkedIn, Email buttons like in screenshot) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.22 }}
              className="flex flex-wrap items-center gap-2.5"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono text-ash bg-surface/90 border border-line hover:text-white hover:border-ash/50 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Code Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="lg:col-span-6 w-full text-left rounded-2xl bg-[#111319]/95 border border-[#232734] overflow-hidden shadow-2xl shadow-black/70 backdrop-blur-md"
          >
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#181b24] border-b border-[#232734] select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-2 text-xs font-mono text-ash/70 hidden sm:inline">
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
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer border ${
                        isActive
                          ? "bg-[#0d0f14] text-[#818cf8] border-[#2b3042]"
                          : "bg-transparent text-ash hover:text-white border-transparent"
                      }`}
                    >
                      <TabIcon className="w-3 h-3" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}

                {/* Copy snippet button */}
                <button
                  onClick={handleCopy}
                  className="p-1 rounded-md text-ash hover:text-white hover:bg-canvas transition-colors ml-1 cursor-pointer"
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
            <div className="p-5 bg-[#0b0d12] font-mono text-xs sm:text-[13px] text-gray-300 overflow-x-auto leading-relaxed min-h-[300px]">
              <pre className="whitespace-pre">
                <code>{codeSnippets[activeTab]}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
