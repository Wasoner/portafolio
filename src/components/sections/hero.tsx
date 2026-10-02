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
    { name: "GitHub", href: profile.github, icon: GithubIcon },
    { name: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
    { name: "Email", href: `mailto:${profile.email}`, icon: Mail },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center py-24 sm:py-32"
    >
      <div className="relative w-full max-w-4xl mx-auto px-6 text-center">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-ink mb-6 leading-[1.1]"
        >
          {t.hero.greeting} {t.hero.name}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-ash max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a href="#projects" className="group">
            <Button size="lg">
              <span>{t.hero.viewProjects}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline">
              <Mail className="w-4 h-4" />
              <span>{t.hero.contactMe}</span>
            </Button>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-2"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-2.5 rounded-lg text-ash hover:text-accent hover:border-accent/40 border border-transparent transition-colors duration-200"
                aria-label={social.name}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
