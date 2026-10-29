"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { buttonClass } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { terminalSnippets } from "@/data/terminal";
import { ArrowRight, Terminal, Layers, Heart, Copy, Check } from "lucide-react";

type TerminalTab = "stack" | "architecture" | "philosophy";

/**
 * Technical Hero.
 *
 * Identity, tagline and links all come from `src/data/profile.ts`; the
 * terminal copy lives in `src/data/terminal.ts`. This component only composes
 * markup, motion and interaction state.
 */
export function HeroSection() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = React.useState<TerminalTab>("stack");
  const [copied, setCopied] = React.useState(false);

  const socialLinks = [
    { name: "GitHub", href: profile.github, icon: GithubIcon },
    { name: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
    { name: "WhatsApp", href: profile.whatsapp, icon: WhatsappIcon },
  ];

  const terminalTabs: { id: TerminalTab; label: string; icon: typeof Terminal }[] = [
    { id: "stack", label: t.hero.terminal.tabStack, icon: Terminal },
    { id: "architecture", label: t.hero.terminal.tabArchitecture, icon: Layers },
    { id: "philosophy", label: t.hero.terminal.tabPhilosophy, icon: Heart },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(terminalSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center py-24 sm:py-32"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* Left Column: Identity, tagline, CTAs & social links */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            {/* Greeting eyebrow */}
            <p
              className="font-mono text-sm text-accent mb-3 animate-fade-up"
            >
              {t.hero.greeting}
            </p>

            {/* Main Title */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white mb-3 leading-[1.12] animate-fade-up"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="block">Cristóbal</span>
              <span className="block">Rivas Paul</span>
            </h1>

            {/* Role */}
            <p
              className="font-mono text-sm sm:text-base tracking-wide text-ink mb-5 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              {profile.role}
            </p>

            {/* Tagline */}
            <p
              className="text-base sm:text-lg text-ash max-w-xl mb-9 leading-relaxed font-normal animate-fade-up"
              style={{ animationDelay: "0.12s" }}
            >
              {profile.tagline[language]}
            </p>

            {/* Call to Actions */}
            <div
              className="flex flex-wrap items-center gap-3.5 mb-8 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <a href="#projects" className={buttonClass("primary", "md")}>
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={profile.cvUrl}
                download={profile.cvFileName}
                className={buttonClass("outline", "md")}
              >
                <span>{t.hero.downloadCV}</span>
              </a>
            </div>

            {/* Social Links: GitHub, LinkedIn, WhatsApp */}
            <div
              className="flex flex-wrap items-center gap-2.5 animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono text-ash bg-surface/90 border border-line hover:text-ink hover:border-accent/50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                    aria-label={`${social.name} — ${profile.fullName}`}
                  >
                    <Icon className="w-3.5 h-3.5" aria-hidden />
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: interactive code terminal */}
          <div
            className="lg:col-span-7 w-full text-left rounded-2xl bg-[#111319]/95 border border-[#232734] overflow-hidden shadow-2xl shadow-black/70 backdrop-blur-md animate-fade-scale"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between gap-2 px-4 py-3 bg-[#181b24] border-b border-[#232734] select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#f97316]" aria-hidden />
                <span className="w-3 h-3 rounded-full bg-[#fb923c]" aria-hidden />
                <span className="w-3 h-3 rounded-full bg-[#fdba74]" aria-hidden />
                <span className="ml-2 text-xs font-mono text-ash hidden sm:inline">
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
                      aria-pressed={isActive}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer border ${
                        isActive
                          ? "bg-[#0d0f14] text-accent border-[#2b3042]"
                          : "bg-transparent text-ash hover:text-ink border-transparent"
                      }`}
                    >
                      <TabIcon className="w-3 h-3" aria-hidden />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}

                {/* Copy snippet button */}
                <button
                  onClick={handleCopy}
                  className="p-1 rounded-md text-ash hover:text-ink hover:bg-canvas transition-colors ml-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                  title={t.hero.terminal.copySnippet}
                  aria-label={t.hero.terminal.copySnippet}
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-accent" aria-hidden />
                  ) : (
                    <Copy className="w-3.5 h-3.5" aria-hidden />
                  )}
                </button>
              </div>
            </div>

            {/* Terminal Code Body (whitespace-pre-wrap avoids side scrolling) */}
            <div className="p-4 sm:p-5 bg-[#0b0d12] font-mono text-xs sm:text-[13px] text-gray-200 leading-relaxed min-h-[340px] max-h-[460px] overflow-y-auto">
              <pre className="whitespace-pre-wrap break-words font-mono">
                <code>{terminalSnippets[activeTab]}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
