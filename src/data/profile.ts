/**
 * Single source of truth for identity, positioning copy and links.
 *
 * These values were previously duplicated across `hero.tsx`, `contact.tsx`,
 * `navbar.tsx`, `footer.tsx` and the JSON-LD block in `layout.tsx`, so editing
 * one and forgetting the others left the site inconsistent.
 *
 * All visitor-facing content lives in `src/data/*` so the presentation layer
 * (`src/components/*`) never hardcodes copy.
 */
export const profile = {
  /** Full name as it should appear in headings and structured data. */
  fullName: "Cristóbal Rivas Paul",
  /** Short form used in the wordmark (navbar / footer). */
  brand: "crivas",
  /** Appended to the brand: "Wasoner" + ".dev" */
  brandSuffix: ".dev",
  jobTitle: "Ingeniero Civil en Informática",
  /** Primary professional role — English, for the international market. */
  role: "Full Stack Developer",

  /**
   * Hero tagline: the single positioning statement rendered under the name.
   * Bilingual because the site ships ES/EN from the same data source.
   */
  tagline: {
    es: "Desarrollo aplicaciones web escalables y modulares. Especializado en arquitectura backend con Node.js y Python, diseño de contratos API y frontend moderno con TypeScript, React y Next.js, implementando flujos de trabajo guiados por especificación (SDD) y aceleración agéntica.",
    en: "I build scalable, modular web applications. Specialized in backend architecture with Node.js and Python, API contract design and modern frontend development with TypeScript, React and Next.js, applying specification-driven development (SDD) workflows and agentic acceleration.",
  },

  email: "tobalpaulrivas@gmail.com",
  phone: "+56 9 2981 3629",

  /** WhatsApp deep link with a pre-filled conversation opener. */
  whatsapp:
    "https://wa.me/56929813629?text=Hola%20Cristobal,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar.",

  /** Downloadable CV served from `/public`. */
  cvUrl: "/cv-cristobal-rivas.pdf",
  cvFileName: "CV-Cristobal-Rivas-Paul.pdf",

  location: "Santiago / Concepción, Chile",
  availability: "Disponible para incorporación inmediata (Remoto / Híbrido / Presencial)",

  github: "https://github.com/Wasoner",
  githubHandle: "Wasoner",
  linkedin: "https://www.linkedin.com/in/cristobal-rivas-paul",
  linkedinHandle: "cristobal-rivas-paul",

  /** Deployed origin — set NEXT_PUBLIC_SITE_URL in production. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  siteName: "Cristóbal Rivas",
} as const;
