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
        {/* Single Global Technical Grid Overlay */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 bg-grid-pattern opacity-90 z-0"
        />

        {/* Hero Ambient Neon Glows (Left vibrant blue/cyan, Right neon purple/magenta & emerald/cyan) */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 -left-14 w-[520px] h-[520px] bg-blue-600/45 rounded-full blur-[85px] z-0"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-16 -left-10 w-[360px] h-[360px] bg-indigo-500/40 rounded-full blur-[75px] z-0"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-4 -right-12 w-[540px] h-[540px] bg-[#a855f7]/50 rounded-full blur-[90px] z-0"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-[280px] -right-16 w-[480px] h-[480px] bg-[#d946ef]/45 rounded-full blur-[95px] z-0"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-[540px] right-2 w-[460px] h-[460px] bg-[#06b6d4]/45 rounded-full blur-[95px] z-0"
        />

        {/* Ambient Neon Glows transitioning smoothly down to About, Projects, and Contact */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-[1100px] -left-28 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[140px] z-0"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-[1900px] -right-28 w-[520px] h-[520px] bg-[#a855f7]/30 rounded-full blur-[140px] z-0"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-[2700px] -left-20 w-[460px] h-[460px] bg-[#06b6d4]/28 rounded-full blur-[130px] z-0"
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
