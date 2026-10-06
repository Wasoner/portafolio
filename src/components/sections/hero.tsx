"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { ArrowRight, Mail } from "lucide-react";

/**
 * Minimal hero: one headline, one-line subtitle, two CTAs and matte social
 * icons. The stats block, rotating roles, ambient gradients and neon
 * gradients were removed in the noise-reduction pass — the only accent color
 * lives on interactive elements.
 */
export function HeroSection() {
  const { t } = useLanguage();

  const socialLinks = [
    { name: "GitHub", href: profile.github, icon: GithubIcon, label: "GitHub" },
    { name: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
    { name: "Email", href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center py-20 sm:py-28"
    >
      <div className="relative w-full max-w-4xl mx-auto px-6 text-center">
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
          className="flex flex-wrap items-center justify-center gap-3.5 mb-12"
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
          className="flex items-center justify-center gap-3"
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
      </div>
    </section>
  );
}
