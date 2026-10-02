/**
 * Single source of truth for identity and links.
 *
 * These values were previously duplicated across `hero.tsx`, `contact.tsx`,
 * `navbar.tsx`, `footer.tsx` and the JSON-LD block in `layout.tsx`, so editing
 * one and forgetting the others left the site inconsistent.
 */
export const profile = {
  /** Full name as it should appear in headings and structured data. */
  fullName: "Cristóbal Rivas Paul",
  /** Short form used in the wordmark (navbar / footer). */
  brand: "Wasoner",
  /** Appended to the brand: "Wasoner" + ".dev" */
  brandSuffix: ".dev",
  jobTitle: "Ingeniero Civil en Informática",
  role: "Desarrollador Full Stack",

  email: "tobalpaulrivas@gmail.com",
  phone: "+56 9 2981 3629",
  phoneHref: "+56929813629",

  location: "Santiago / Concepción, Chile",
  availability: "Remoto / Híbrido / Presencial",

  github: "https://github.com/Wasoner",
  githubHandle: "Wasoner",
  linkedin: "https://www.linkedin.com/in/cristobal-rivas-paul",
  linkedinHandle: "cristobal-rivas-paul",
  instagram:
    "https://www.instagram.com/invites/contact/?i=mbnkd20djdp2&utm_content=orl57u",

  /** Deployed origin — set NEXT_PUBLIC_SITE_URL in production. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  siteName: "Cristóbal Rivas",
} as const;
