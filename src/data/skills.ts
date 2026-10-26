/**
 * Tech stack data for the Skills section.
 *
 * Deliberately flat: no proficiency percentages or progress bars — arbitrary
 * metrics invite doubt in technical reviews. The list states what is used,
 * grouped by engineering domain; the icons are mapped in the section component
 * so this file stays free of UI imports.
 */
import type { LocalizedText } from "./about";

export type SkillCategoryId =
  | "frontend"
  | "backend"
  | "databases"
  | "devops"
  | "methodology";

export interface SkillCategory {
  id: SkillCategoryId;
  title: LocalizedText;
  items: string[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    title: { es: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "Angular", "Vue.js", "TypeScript"],
  },
  {
    id: "backend",
    title: { es: "Backend & APIs", en: "Backend & APIs" },
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "Python (FastAPI)",
      "RESTful APIs",
      "Arquitectura Modular",
    ],
  },
  {
    id: "databases",
    title: { es: "Bases de Datos", en: "Databases" },
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    id: "devops",
    title: { es: "DevOps & Tooling", en: "DevOps & Tooling" },
    items: ["Docker", "Git", "GitHub Actions (CI/CD)", "Postman", "Linux"],
  },
  {
    id: "methodology",
    title: { es: "Metodologías & AI Engineering", en: "Methodologies & AI Engineering" },
    items: [
      "Spec-Driven Development (SDD)",
      "OpenAPI / Swagger",
      "AI-Assisted Development",
    ],
  },
];
