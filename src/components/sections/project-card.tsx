"use client";

import React from "react";
import { Project } from "@/data/projects";
import { useLanguage } from "@/context/language-context";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonClass } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/icons";
import { Lock, ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

/**
 * Case-study card.
 *
 * Renders the summary tier of the study: technical title → problem & solution
 * → two concrete technical challenges → stack chips → labelled action links
 * (Live Demo / Source Code) with descriptive aria-labels. The full study opens
 * in the modal.
 */
export function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const { t, language } = useLanguage();

  const actionLabel = (label: string) => `${label} — ${project.title}`;

  return (
    <Card interactive className="flex flex-col h-full group">
      {/* Meta Row */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <span className="text-[11px] font-mono uppercase tracking-wider text-accent">
          {project.category}
        </span>

        {project.isPrivate && (
          <Badge variant="warning" className="text-[10px] gap-1">
            <Lock className="w-2.5 h-2.5" aria-hidden />
            <span>{t.projects.privateRepo}</span>
          </Badge>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-ink group-hover:text-accent transition-colors mb-4">
        {project.title}
      </h3>

      {/* Problem & Solution */}
      <div className="space-y-3 mb-4">
        <div>
          <span className="block text-[11px] font-mono uppercase tracking-wider text-accent mb-1">
            {t.projects.problem}
          </span>
          <p className="text-sm text-ash leading-relaxed">{project.problem[language]}</p>
        </div>
        <div>
          <span className="block text-[11px] font-mono uppercase tracking-wider text-accent mb-1">
            {t.projects.solution}
          </span>
          <p className="text-sm text-ash leading-relaxed">{project.solution[language]}</p>
        </div>
      </div>

      {/* Technical Challenges Overcome */}
      <div className="mb-5">
        <span className="block text-[11px] font-mono uppercase tracking-wider text-accent mb-2">
          {t.projects.challenges}
        </span>
        <ul className="space-y-2">
          {project.technicalChallenges[language].map((challenge, i) => (
            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-ash leading-relaxed">
              <CheckCircle2
                className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5"
                aria-hidden
              />
              <span>{challenge}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Stack badges */}
      <div className="flex flex-wrap gap-1.5 mb-6" aria-label={t.projects.techStack}>
        {project.tags.slice(0, 5).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[11px] font-mono rounded bg-surface-2 text-ink border border-line"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 5 && (
          <span className="px-2 py-0.5 text-[11px] font-mono rounded text-ash">
            +{project.tags.length - 5}
          </span>
        )}
      </div>

      {/* Card Footer Actions */}
      <div className="mt-auto pt-4 border-t border-line space-y-3">
        <div className="flex flex-wrap gap-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass("primary", "sm")}
              aria-label={actionLabel(t.projects.viewLive)}
            >
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
              <span>{t.projects.viewLive}</span>
            </a>
          )}
          {!project.isPrivate && project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass("secondary", "sm")}
              aria-label={actionLabel(t.projects.sourceCode)}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>{t.projects.sourceCode}</span>
            </a>
          )}
        </div>

        <button
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-ink transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 rounded"
          aria-label={actionLabel(t.projects.viewDetails)}
        >
          <span>{t.projects.viewDetails}</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden />
        </button>
      </div>
    </Card>
  );
}
