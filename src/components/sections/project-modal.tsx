"use client";

import React from "react";
import { Project, ProjectRepo } from "@/data/projects";
import { useLanguage } from "@/context/language-context";
import { Modal } from "@/components/ui/modal";
import { Badge } from "@/components/ui/badge";
import { buttonClass } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/icons";
import {
  ExternalLink,
  Lock,
  Layers,
  CheckCircle2,
  Cpu,
  LayoutDashboard,
  ShieldCheck,
  Target,
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Full case study: problem & solution, technical challenges, architecture and
 * feature list. Action links are anchors styled with `buttonClass` so no
 * interactive element is nested inside another.
 */
export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { language, t } = useLanguage();

  if (!project) return null;

  const repoLinks: ProjectRepo[] =
    project.repos ??
    (project.githubUrl ? [{ label: t.projects.sourceCode, url: project.githubUrl }] : []);

  const features = project.features[language] || project.features.es;
  const description = project.fullDescription[language] || project.fullDescription.es;
  const architecture = project.architecture[language] || project.architecture.es;
  const problem = project.problem[language] || project.problem.es;
  const solution = project.solution[language] || project.solution.es;
  const challenges = project.technicalChallenges[language] || project.technicalChallenges.es;
  const actionLabel = (label: string) => `${label} — ${project.title}`;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title} maxWidth="max-w-4xl">
      {/* Top Banner / Visual Mockup Preview */}
      <div className="relative rounded-xl overflow-hidden bg-surface-2 border border-line p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[220px]">
        <div className="absolute top-3 right-3 flex items-center gap-2">
          {project.isPrivate ? (
            <Badge variant="warning" className="text-[11px]">
              <Lock className="w-3 h-3" aria-hidden />
              <span>{t.projects.privateRepo}</span>
            </Badge>
          ) : (
            <Badge variant="success" className="text-[11px]">
              <span>Open Source</span>
            </Badge>
          )}
        </div>

        {/* Visual Mockup Graphic */}
        <div
          className="w-16 h-16 rounded-2xl bg-canvas border border-line flex items-center justify-center text-accent mb-3"
          aria-hidden
        >
          <LayoutDashboard className="w-8 h-8" />
        </div>
        <h4 className="text-xl sm:text-2xl font-semibold text-ink mb-2">
          {project.title}
        </h4>
        <p className="text-xs sm:text-sm text-ash max-w-xl">
          {project.shortDescription[language] || project.shortDescription.es}
        </p>

        {/* Stack badges */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mt-4" aria-label={t.projects.techStack}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-canvas border border-line text-ash"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass("primary", "sm")}
            aria-label={actionLabel(t.projects.viewLive)}
          >
            <ExternalLink className="w-4 h-4" aria-hidden />
            <span>{t.projects.viewLive}</span>
          </a>
        )}
        {repoLinks.map((repo) => (
          <a
            key={repo.url}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass("secondary", "sm")}
            aria-label={actionLabel(repo.label)}
          >
            <GithubIcon className="w-4 h-4" />
            <span>{repo.label}</span>
          </a>
        ))}
        {project.isPrivate && (
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-accent/10 border border-accent/30 text-accent text-xs">
            <ShieldCheck className="w-4 h-4" aria-hidden />
            <span>Código bajo acuerdo de confidencialidad comercial.</span>
          </div>
        )}
      </div>

      {/* Problem & Solution */}
      <div className="space-y-3 bg-surface-2 p-5 rounded-xl border border-line">
        <div className="flex items-center gap-2 text-accent">
          <Target className="w-4 h-4" aria-hidden />
          <h4 className="text-sm font-bold uppercase tracking-wider font-mono">
            {t.projects.problemSolution}
          </h4>
        </div>
        <div className="space-y-3">
          <div>
            <span className="block text-[11px] font-mono uppercase tracking-wider text-accent mb-1">
              {t.projects.problem}
            </span>
            <p className="text-ink text-sm leading-relaxed">{problem}</p>
          </div>
          <div>
            <span className="block text-[11px] font-mono uppercase tracking-wider text-accent mb-1">
              {t.projects.solution}
            </span>
            <p className="text-ink text-sm leading-relaxed">{solution}</p>
          </div>
        </div>
      </div>

      {/* Technical Challenges Overcome */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden />
          <h4 className="text-sm font-bold uppercase tracking-wider font-mono text-ash">
            {t.projects.challenges}
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {challenges.map((challenge, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 p-3 rounded-lg bg-surface-2 border border-line text-xs text-ink"
            >
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden />
              <span>{challenge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-ash font-mono">
          {language === "es" ? "Descripción del Sistema" : "System Overview"}
        </h4>
        <p className="text-ink leading-relaxed text-sm sm:text-base">{description}</p>
      </div>

      {/* Architecture & Engineering Highlights */}
      <div className="space-y-3 bg-surface-2 p-5 rounded-xl border border-line">
        <div className="flex items-center gap-2 text-accent">
          <Cpu className="w-4 h-4" aria-hidden />
          <h4 className="text-sm font-bold uppercase tracking-wider font-mono">
            {t.projects.architecture}
          </h4>
        </div>
        <p className="text-ash text-xs sm:text-sm leading-relaxed">{architecture}</p>
      </div>

      {/* Key Features List */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-accent" aria-hidden />
          <h4 className="text-sm font-bold uppercase tracking-wider font-mono text-ash">
            {t.projects.keyFeatures}
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 p-3 rounded-lg bg-surface border border-line text-xs text-ink"
            >
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
