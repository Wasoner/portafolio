"use client";

import React from "react";
import { Project } from "@/data/projects";
import { useLanguage } from "@/context/language-context";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/icons";
import { Lock, ArrowUpRight, Eye } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

/**
 * Clean matte project card: no gradient banners or neon glows. Hierarchy comes
 * from typography and a hairline border; the accent only appears on the
 * category badge and hover states.
 */
export function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const { language, t } = useLanguage();

  const title = project.title;
  const description =
    project.shortDescription[language] || project.shortDescription.es;

  return (
    <Card interactive className="flex flex-col h-full group">
      {/* Meta Row */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <span className="text-[11px] font-mono uppercase tracking-wider text-accent">
          {project.category}
        </span>

        {project.isPrivate ? (
          <Badge variant="warning" className="text-[10px] gap-1">
            <Lock className="w-2.5 h-2.5" />
            <span>{t.projects.privateRepo}</span>
          </Badge>
        ) : (
          <Badge variant="success" className="text-[10px]">
            <span>Open Source</span>
          </Badge>
        )}
      </div>

      {/* Title & Description */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-ink group-hover:text-accent transition-colors mb-2.5 line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-ash leading-relaxed line-clamp-3 mb-5 flex-1">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] font-mono rounded bg-surface-2 text-ash border border-line"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 text-[11px] font-mono rounded text-ash">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-line flex items-center justify-between gap-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => onOpenModal(project)}
            className="flex-1 text-xs"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{t.projects.viewDetails}</span>
          </Button>

          {/* GitHub button only if NOT private */}
          {!project.isPrivate && project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              title={t.projects.viewGithub}
            >
              <Button size="icon" variant="outline" className="w-8 h-8 p-0">
                <GithubIcon className="w-3.5 h-3.5" />
              </Button>
            </a>
          )}

          {/* Live demo button if present */}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              title={t.projects.viewLive}
            >
              <Button size="icon" variant="outline" className="w-8 h-8 p-0">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
