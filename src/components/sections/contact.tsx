"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Paperclip, X } from "lucide-react";

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      if (selected.size > 5 * 1024 * 1024) {
        alert("El archivo no debe superar los 5 MB.");
        return;
      }
      setFile(selected);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setStatus("loading");

    try {
      const body = new FormData();
      body.append("email", formData.email);
      body.append("subject", formData.subject);
      body.append("message", formData.message);
      if (file) {
        body.append("file", file);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body,
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ email: "", subject: "", message: "" });
        setFile(null);

        // Loaded on demand so the ~10 KB library stays out of the initial bundle.
        const { default: confetti } = await import("canvas-confetti");
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#6366f1", "#818cf8", "#949ba8"],
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
    <section id="contact" className="py-20 sm:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="mb-3"
          >
            <Badge variant="accent">{t.contact.badge}</Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight mb-3"
          >
            {t.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="text-ash text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            <Card className="p-6 space-y-6 bg-surface">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-ink mb-1">
                  {t.contact.infoTitle}
                </h3>
                <p className="text-xs text-ash">{t.contact.infoSubtitle}</p>
              </div>

              {/* Direct Info Items */}
              <div className="space-y-3.5">
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-surface-2 border border-line">
                  <div className="w-9 h-9 rounded-lg bg-canvas border border-line flex items-center justify-center text-accent shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
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
                  <div className="w-9 h-9 rounded-lg bg-canvas border border-line flex items-center justify-center text-accent shrink-0">
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
                  <div className="w-9 h-9 rounded-lg bg-canvas border border-line flex items-center justify-center text-accent shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-ash block uppercase">
                      {t.contact.locationLabel}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-ink">
                      {t.contact.locationValue}
                    </span>
                  </div>
                </div>
              </div>

              {/* Professional Profiles */}
              <div>
                <span className="text-xs font-medium text-ash block mb-3 font-mono">
                  {t.contact.socialLabel}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-canvas border border-line text-ash hover:text-ink hover:border-accent/40 transition-colors text-xs font-medium"
                  >
                    <LinkedinIcon className="w-4 h-4 text-accent" />
                    <span>LinkedIn Perfil</span>
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-canvas border border-line text-ash hover:text-ink hover:border-accent/40 transition-colors text-xs font-medium"
                  >
                    <GithubIcon className="w-4 h-4 text-accent" />
                    <span>GitHub Repos</span>
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
                  {/* Correo */}
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

                  {/* Asunto */}
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

                  {/* Detalles (Mensaje) */}
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

                  {/* Adjuntar Archivos */}
                  <div>
                    <label className="block text-xs font-medium text-ash mb-1.5 font-mono">
                      {t.contact.form.fileAttachment}
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="contact-file-input"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.txt,.zip"
                      />
                      {file ? (
                        <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-surface-2 border border-accent/40 text-xs text-ink">
                          <div className="flex items-center gap-2 truncate">
                            <Paperclip className="w-4 h-4 text-accent shrink-0" />
                            <span className="truncate">{file.name}</span>
                            <span className="text-ash font-mono text-[11px]">
                              ({(file.size / 1024).toFixed(1)} KB)
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setFile(null)}
                            className="p-1 text-ash hover:text-ink transition-colors ml-2"
                            title="Remover archivo"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <label
                          htmlFor="contact-file-input"
                          className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-canvas border border-dashed border-line hover:border-accent/50 text-xs text-ash hover:text-ink cursor-pointer transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <Paperclip className="w-4 h-4 text-ash" />
                            <span>Seleccionar archivo desde tu dispositivo</span>
                          </span>
                          <span className="text-[11px] font-mono text-ash/80">Máx. 5 MB</span>
                        </label>
                      )}
                    </div>
                    <span className="block text-[11px] text-ash/70 mt-1">
                      {t.contact.form.fileHint}
                    </span>
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{t.contact.form.errorMessage}</span>
                    </div>
                  )}

                  {/* Botón Enviar */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full text-sm font-semibold"
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
