import { LanguageProvider } from "@/context/language-context";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-canvas text-ink font-sans selection:bg-accent/20 selection:text-ink overflow-x-hidden">
        {/* Global Technical Grid Overlay */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 bg-grid-pattern opacity-90 z-0"
        />

        {/* Ambient Neon Glows for lower sections (About, Projects, Contact) */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-[1200px] -left-32 w-[520px] h-[520px] bg-blue-600/35 rounded-full blur-[130px] z-0"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-[2100px] -right-32 w-[550px] h-[550px] bg-[#a855f7]/38 rounded-full blur-[140px] z-0"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-[3000px] -left-20 w-[480px] h-[480px] bg-[#06b6d4]/30 rounded-full blur-[130px] z-0"
        />

        {/* Header / Navbar */}
        <Navbar />

        {/* Main Content: Exactamente las 4 secciones solicitadas */}
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
