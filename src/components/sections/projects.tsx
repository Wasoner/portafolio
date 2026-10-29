"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { projectsData, Project } from "@/data/projects";
import { ProjectCard } from "./project-card";
import dynamic from "next/dynamic";
import { Reveal } from "@/components/ui/reveal";

// The case-study modal (and its copy) only matters once a card is opened,
// so it ships as its own chunk instead of riding along with the page.
const ProjectModal = dynamic(
  () => import("./project-modal").then((mod) => mod.ProjectModal),
  { ssr: false }
);

export function ProjectsSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { id: "all", label: t.projects.filterAll },
    { id: "fullstack", label: t.projects.filterFullstack },
    { id: "frontend", label: t.projects.filterFrontend },
    { id: "backend", label: t.projects.filterBackend },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Reveal className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-line" aria-hidden />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ash">
              {t.projects.badge}
            </span>
            <span className="h-px w-10 bg-line" aria-hidden />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight mb-3">
              {t.projects.title}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-ash text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              {t.projects.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors duration-200 cursor-pointer border ${
                activeFilter === filter.id
                  ? "bg-accent/10 text-accent border-accent/30"
                  : "bg-transparent text-ash border-line hover:text-ink hover:border-accent/40"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid — content-rich cards need the extra width.
            Cards animate in with pure CSS (works without JS too). */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="animate-fade-up"
              style={{ animationDelay: `${Math.min(idx, 4) * 0.06}s` }}
            >
              <ProjectCard
                project={project}
                onOpenModal={(proj) => setSelectedProject(proj)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
