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
