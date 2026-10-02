import { Translations } from "./es";

export const en: Translations = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    downloadCV: "Download CV",
  },
  hero: {
    greeting: "Hi, I am",
    name: "Cristóbal Rivas Paul",
    subtitle:
      "Civil Engineer in Computer Science · Specialized in RESTful APIs & SaaS",
    viewProjects: "View Projects",
    contactMe: "Contact",
  },
  about: {
    badge: "Get to know me",
    title: "Building end-to-end software solutions",
    paragraph1:
      "I am a Civil Engineer in Computer Science graduated from the Universidad del Bío-Bío, focused on turning complex requirements into seamless, maintainable, and high-performance digital applications.",
    paragraph2:
      "My expertise spans modern interfaces built with React, React Native and Angular, through robust backend services in Java (Spring Boot, Javalin) and PHP, integrated with relational databases (MySQL, SQL Server, PostgreSQL) and NoSQL stores (MongoDB).",
    paragraph3:
      "I stand out for assertive communication, natural technical leadership, collaborative work under agile methodologies (Scrum), and a fast track record of autonomous learning and adoption of new technologies.",
    highlights: [
      {
        title: "Frontend & Mobile",
        desc: "Modern interfaces with React, React Native and Angular, Tailwind CSS and Bootstrap, with a focus on responsive, accessible design.",
      },
      {
        title: "Backend & APIs",
        desc: "Robust services in Java (Spring Boot, Javalin) and PHP, RESTful APIs and layered architecture with JWT authentication.",
      },
      {
        title: "Databases & Modeling",
        desc: "MySQL, SQL Server, PostgreSQL and MongoDB, entity-relationship modeling and query optimization.",
      },
      {
        title: "Tools & Best Practices",
        desc: "Git, GitHub, Docker, Postman, Scrum, Clean Code and AI assistants (Claude Code, Cursor, Codex).",
      },
    ],
  },
  projects: {
    badge: "Portfolio",
    title: "Featured Projects",
    subtitle: "A selection of complete systems and APIs published on my GitHub account.",
    filterAll: "All",
    filterFullstack: "Full Stack",
    filterFrontend: "Frontend",
    filterBackend: "Backend",
    viewDetails: "View Case Study",
    viewLive: "Live Demo",
    viewGithub: "Source Code",
    privateRepo: "Private / Enterprise Repository",
    techStack: "Tech Stack",
    keyFeatures: "Key Features",
    architecture: "Architecture & Challenges",
    closeModal: "Close",
    gallery: "Project Gallery",
    repositories: "Repositories",
  },
  experience: {
    badge: "Milestones",
    title: "Experience & Education",
    subtitle: "My professional path and academic background in software development.",
    workTab: "Work Experience",
    educationTab: "Education & Certifications",
    present: "Present",
  },
  contact: {
    badge: "Get in Touch",
    title: "Have an idea or a project in mind?",
    subtitle: "I am open to full-time opportunities, freelance projects, and technical collaborations.",
    infoTitle: "Contact Information",
    infoSubtitle: "Feel free to reach out directly or send a message via the form.",
    emailLabel: "Email Address",
    phoneLabel: "Phone",
    locationLabel: "Location",
    locationValue: "Santiago / Concepción, Chile — Remote / Hybrid / On-site",
    socialLabel: "Socials & Profiles",
    form: {
      name: "Your Name",
      namePlaceholder: "e.g. John Doe",
      email: "Your Email Address",
      emailPlaceholder: "john@example.com",
      subject: "Subject",
      subjectPlaceholder: "Project Proposal / Job Opportunity",
      message: "Message",
      messagePlaceholder: "Tell me about your project goals, scope, and timeline...",
      submit: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent Successfully!",
      successMessage: "Thank you for reaching out. I will get back to you as soon as possible.",
      errorTitle: "Error sending message",
      errorMessage: "Something went wrong. Please try again or reach out via email directly.",
      sendAnother: "Send another message",
    },
  },
  footer: {
    builtWith: "Designed & developed with Next.js, Tailwind CSS and Framer Motion.",
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
};
