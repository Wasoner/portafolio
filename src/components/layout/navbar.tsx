"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/language-context";
import { LanguageToggle } from "./language-toggle";
import { Menu, X, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const SECTION_IDS = [
      "hero",
      "about",
      "projects",
      "contact",
    ];

    type Bounds = { id: string; top: number; bottom: number };

    let bounds: Bounds[] = [];
    let frame = 0;

    // Reading offsetTop/offsetHeight forces a layout, so we measure once and
    // reuse the cached positions instead of reflowing on every scroll event.
    const measure = () => {
      bounds = SECTION_IDS.flatMap((id) => {
        const el = document.getElementById(id);
        if (!el) return [];
        const top = el.offsetTop;
        return [{ id, top, bottom: top + el.offsetHeight }];
      });
    };

    const update = () => {
      frame = 0;
      const scrolled = window.scrollY > 20;
      setIsScrolled((prev) => (prev === scrolled ? prev : scrolled));

      const scrollPosition = window.scrollY + 200;
      const match = bounds.find(
        (b) => scrollPosition >= b.top && scrollPosition < b.bottom
      );
      if (match) setActiveSection((prev) => (prev === match.id ? prev : match.id));
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    const handleResize = () => {
      measure();
      schedule();
    };

    measure();
    update();

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { href: "#about", label: t.nav.about, id: "about" },
    { href: "#projects", label: t.nav.projects, id: "projects" },
    { href: "#contact", label: t.nav.contact, id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-canvas/85 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* Bottom fade: the bar dissolves into the content below instead of
          drawing a hard separator line between sections. */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-full h-12 -mt-2 bg-gradient-to-b from-canvas/80 via-canvas/40 to-transparent transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo — bold Wasoner.dev like screenshot */}
        <a
          href="#hero"
          className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-white/90 transition-colors duration-200 focus:outline-none flex items-center gap-0.5"
        >
          <span>{profile.brand}</span>
          <span className="text-[#818cf8]">{profile.brandSuffix}</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-ash hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Actions (Language Switch ES/EN like in screenshot) */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-ash hover:text-ink hover:bg-surface border border-line transition-colors focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="relative md:hidden bg-canvas/95 backdrop-blur-xl px-6 py-5 mt-2 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  activeSection === link.id
                    ? "text-accent bg-accent/10"
                    : "text-ash hover:text-ink hover:bg-surface"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 mt-3 border-t border-line flex flex-col gap-2">
            <a
              href="/cv.pdf"
              download="CV-Cristobal-Rivas-Paul.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full"
            >
              <Button variant="ghost" size="md" className="w-full justify-start">
                <Download className="w-4 h-4" />
                <span>{t.nav.downloadCV}</span>
              </Button>
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block w-full">
              <Button variant="primary" size="md" className="w-full">
                <Send className="w-4 h-4" />
                <span>{t.hero.contactMe}</span>
              </Button>
            </a>
          </div>
          {/* Bottom fade so the drawer melts into the page below. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-full h-10 bg-gradient-to-b from-canvas/95 via-canvas/50 to-transparent"
          />
        </div>
      )}
    </header>
  );
}
