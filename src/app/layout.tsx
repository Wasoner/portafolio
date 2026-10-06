import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = profile.siteUrl;

const SITE_NAME = profile.siteName;
const TITLE = `${profile.jobTitle} | ${profile.role} — Soluciones Tecnológicas & Full Stack`;
const DESCRIPTION =
  "Portafolio profesional de Cristóbal Rivas Paul, Ingeniero Civil en Informática y Desarrollador Full Stack. Especializado en APIs RESTful, SaaS B2B, React, Angular, Java (Spring Boot) y bases de datos.";

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
    "Desarrollador Full Stack",
    "Ingeniero Civil en Informática",
    "Cristóbal Rivas Paul",
    "Wasoner",
    "React",
    "React Native",
    "Angular",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Javalin",
    "FastAPI",
    "Python",
    "PHP",
    "MySQL",
    "PostgreSQL",
    "SQL Server",
    "MongoDB",
    "API REST",
    "Tailwind CSS",
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
      sameAs: [profile.github, profile.linkedin],
      knowsAbout: [
        "React",
        "React Native",
        "Angular",
        "TypeScript",
        "Java",
        "Spring Boot",
        "Javalin",
        "PHP",
        "FastAPI",
        "MySQL",
        "PostgreSQL",
        "SQL Server",
        "MongoDB",
        "APIs RESTful",
        "Docker",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased bg-canvas`}
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
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
