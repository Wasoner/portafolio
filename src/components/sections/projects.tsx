"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { projectsData, Project } from "@/data/projects";
import { ProjectCard } from "./project-card";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

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
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3"
          >
            <Badge variant="accent">{t.projects.badge}</Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight mb-4"
          >
            {t.projects.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-ash text-base"
          >
            {t.projects.subtitle}
          </motion.p>
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  project={project}
                  onOpenModal={(proj) => setSelectedProject(proj)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
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
