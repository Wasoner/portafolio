import type { Metadata, Viewport } from "next";
import { Aleo, Geist_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

// Aleo (slab serif) is served as static instances, so weights must be listed
// explicitly. Only the weights actually used by the design are loaded:
// 400 (body), 500 (medium), 600 (semibold headings) and 700 (bold hero/wordmark).
const aleo = Aleo({
  variable: "--font-aleo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = profile.siteUrl;

const SITE_NAME = profile.siteName;
const TITLE = `${profile.fullName} | ${profile.role} — Node.js, Python, TypeScript & React`;
const DESCRIPTION =
  "Portfolio of Cristóbal Rivas Paul, Full Stack Developer specialized in scalable backend architecture with Node.js and Python, API contract design (OpenAPI/Swagger) and modern frontend with TypeScript, React and Next.js. Spec-Driven Development (SDD) and AI-assisted engineering workflows.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Full Stack Developer",
    "Remote Full Stack Developer",
    "Node.js",
    "NestJS",
    "Express",
    "Python",
    "FastAPI",
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "Vue.js",
    "OpenAPI",
    "Swagger",
    "Spec-Driven Development",
    "REST API",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "GitHub Actions",
    "Cristóbal Rivas Paul",
    "Wasoner",
    "Santiago Chile",
    "Concepción Chile",
  ],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  publisher: profile.fullName,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "es_ES",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0f14",
  colorScheme: "dark",
};

/** Structured data so search engines can render rich results. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.fullName,
      alternateName: ["Cristobal Rivas Paul", "Wasoner"],
      jobTitle: `${profile.jobTitle} — ${profile.role}`,
      url: siteUrl,
      email: `mailto:${profile.email}`,
      telephone: profile.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Concepción",
        addressRegion: "Biobío",
        addressCountry: "CL",
      },
      sameAs: [profile.github, profile.linkedin, profile.whatsapp],
      knowsAbout: [
        "Node.js",
        "Express",
        "NestJS",
        "Python",
        "FastAPI",
        "TypeScript",
        "React",
        "Next.js",
        "Angular",
        "Vue.js",
        "RESTful APIs",
        "OpenAPI",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "GitHub Actions",
        "Spec-Driven Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: SITE_NAME,
      description: DESCRIPTION,
      inLanguage: ["es-ES", "en-US"],
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "es-ES",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${aleo.variable} ${geistMono.variable} h-full scroll-smooth antialiased bg-canvas`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-ink selection:bg-accent/25 selection:text-ink">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-canvas focus:outline-none"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
