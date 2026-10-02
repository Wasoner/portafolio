"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Loaded on demand so the ~10 KB library stays out of the initial bundle.
        const { default: confetti } = await import("canvas-confetti");
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#7c5cfc", "#8b6dfc", "#9ba1b0"],
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3"
          >
            <Badge variant="accent">{t.contact.badge}</Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight mb-4"
          >
            {t.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-ash text-base"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <Card className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-ink mb-1">
                  {t.contact.infoTitle}
                </h3>
                <p className="text-xs text-ash">{t.contact.infoSubtitle}</p>
              </div>

              {/* Direct Info Items */}
              <div className="space-y-4">
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-surface-2 border border-line">
                  <div className="w-9 h-9 rounded-lg bg-canvas border border-line flex items-center justify-center text-accent">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-ash block uppercase">
                      {t.contact.emailLabel}
                    </span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm font-medium text-ink hover:text-accent transition-colors break-all"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-surface-2 border border-line">
                  <div className="w-9 h-9 rounded-lg bg-canvas border border-line flex items-center justify-center text-accent">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-ash block uppercase">
                      {t.contact.phoneLabel}
                    </span>
                    <a
                      href={`tel:${profile.phoneHref}`}
                      className="text-sm font-medium text-ink hover:text-accent transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-surface-2 border border-line">
                  <div className="w-9 h-9 rounded-lg bg-canvas border border-line flex items-center justify-center text-accent">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-ash block uppercase">
                      {t.contact.locationLabel}
                    </span>
                    <span className="text-sm font-medium text-ink">
                      {t.contact.locationValue}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <span className="text-xs font-medium text-ash block mb-3 font-mono">
                  {t.contact.socialLabel}
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-canvas border border-line text-ash hover:text-ink hover:border-accent/40 transition-colors text-xs font-medium"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub · {profile.githubHandle}</span>
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-canvas border border-line text-ash hover:text-ink hover:border-accent/40 transition-colors text-xs font-medium"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <Card className="p-6 sm:p-8">
              {status === "success" ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink">
                    {t.contact.form.successTitle}
                  </h3>
                  <p className="text-sm text-ash max-w-md mx-auto">
                    {t.contact.form.successMessage}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setStatus("idle")}
                    className="mt-4"
                  >
                    {t.contact.form.sendAnother}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-ash mb-1.5 font-mono">
                        {t.contact.form.name} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.contact.form.namePlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-canvas border border-line text-ink placeholder:text-ash/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-ash mb-1.5 font-mono">
                        {t.contact.form.email} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.form.emailPlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-canvas border border-line text-ink placeholder:text-ash/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-medium text-ash mb-1.5 font-mono">
                      {t.contact.form.subject}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t.contact.form.subjectPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-canvas border border-line text-ink placeholder:text-ash/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-ash mb-1.5 font-mono">
                      {t.contact.form.message} *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-canvas border border-line text-ink placeholder:text-ash/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{t.contact.form.errorMessage}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full"
                  >
                    {status === "loading" ? (
                      <span>{t.contact.form.sending}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.contact.form.submit}</span>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
