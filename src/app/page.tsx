import { LanguageProvider } from "@/context/language-context";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-canvas text-ink font-sans selection:bg-accent/25 selection:text-ink overflow-x-hidden">
        {/* Single Global Technical Grid Overlay */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 bg-grid-pattern opacity-90 z-0"
        />

        {/* Hero Ambient Glows — black / gray / orange palette */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 -left-14 w-[520px] h-[520px] bg-[#f97316]/35 rounded-full blur-[85px] z-0"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-16 -left-10 w-[360px] h-[360px] bg-[#ea580c]/30 rounded-full blur-[75px] z-0"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-4 -right-12 w-[540px] h-[540px] bg-[#fb923c]/40 rounded-full blur-[90px] z-0"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-[280px] -right-16 w-[480px] h-[480px] bg-[#f97316]/30 rounded-full blur-[95px] z-0"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-[540px] right-2 w-[460px] h-[460px] bg-[#fdba74]/30 rounded-full blur-[95px] z-0"
        />

        {/* Ambient glows transitioning down to About, Skills, Projects and Contact */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-[1100px] -left-28 w-[500px] h-[500px] bg-[#f97316]/25 rounded-full blur-[140px] z-0"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-[1900px] -right-28 w-[520px] h-[520px] bg-[#ea580c]/25 rounded-full blur-[140px] z-0"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-[2700px] -left-20 w-[460px] h-[460px] bg-[#fdba74]/22 rounded-full blur-[130px] z-0"
        />

        {/* Header / Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
