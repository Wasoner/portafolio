export const es = {
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    projects: "Proyectos",
    contact: "Contacto",
    downloadCV: "Descargar CV",
  },
  hero: {
    greeting: "Hola, soy",
    name: "Cristóbal Rivas Paul",
    subtitle:
      "Ingeniero Civil en Informática & Desarrollador Full Stack. Apasionado por la arquitectura limpia, las soluciones tecnológicas escalables y la ingeniería de software de alto impacto.",
    viewProjects: "Ver Proyectos",
    contactMe: "Contacto",
    downloadCV: "Descargar CV",
  },
  about: {
    badge: "Perfil Profesional",
    title: "Ingeniería de software con foco en soluciones reales y rendimiento",
    paragraph1:
      "Soy Ingeniero Civil en Informática titulado con Distinción Máxima de la Universidad del Bío-Bío. Mi pasión radica en resolver problemas complejos mediante software elegante, mantenible y de alta disponibilidad.",
    paragraph2:
      "Cuento con experiencia profesional en desarrollo Full Stack en g-store SpA, donde diseñé e implementé plataformas SaaS B2B, módulos ERP y pasarelas de pago (Transbank Webpay) con Angular, PHP y SQL Server. En el backend desarrollo servicios robustos con Java (Spring Boot, Javalin) y Python (FastAPI), aplicando Clean Architecture, autenticación segura y optimización de bases de datos relacionales y NoSQL.",
    paragraph3:
      "Me adapto rápidamente a cualquier stack tecnológico, promuevo la disciplina técnica y buenas prácticas (Scrum, Git Flow, CI/CD, Testing) y aporto valor inmediato a equipos de desarrollo con visión de producto.",
    highlights: [
      {
        title: "Frontend Moderno & Accesible",
        desc: "Construcción de interfaces reactivas y responsivas con React, Next.js, React Native y Angular, priorizando la experiencia de usuario y rendimiento web.",
      },
      {
        title: "Backend & Arquitectura de APIs",
        desc: "Servicios escalables en Java (Spring Boot, Javalin), Python (FastAPI) y PHP. Diseño de APIs RESTful seguras con JWT y arquitecturas limpias.",
      },
      {
        title: "Bases de Datos & Persistencia",
        desc: "Diseño relacional y optimización de consultas en PostgreSQL, MySQL y SQL Server, junto con almacenamiento documental en MongoDB.",
      },
      {
        title: "Calidad, Métodos Ágiles & DevOps",
        desc: "Trabajo en sprints Scrum, pruebas automatizadas, control de versiones con Git, contenedores Docker y CI/CD orientado a producción.",
      },
    ],
  },
  projects: {
    badge: "Portafolio Técnico",
    title: "Proyectos Destacados en GitHub",
    subtitle: "Soluciones de software de código abierto con arquitectura por capas, pruebas y documentación técnica.",
    filterAll: "Todos",
    filterFullstack: "Full Stack",
    filterFrontend: "Frontend",
    filterBackend: "Backend",
    viewDetails: "Ver Caso de Estudio",
    viewLive: "Demo en Vivo",
    viewGithub: "Ver Repositorio",
    privateRepo: "Repositorio Privado",
    techStack: "Tecnologías utilizadas",
    keyFeatures: "Características Principales",
    architecture: "Arquitectura & Desafíos Técnicos",
    closeModal: "Cerrar",
    gallery: "Capturas del Sistema",
    repositories: "Repositorios en GitHub",
  },
  contact: {
    badge: "Oportunidades Laborales",
    title: "¿Buscando un Desarrollador Full Stack para tu equipo?",
    subtitle: "Estoy disponible para incorporarme a equipos de ingeniería en modalidad remota, híbrida o presencial. Conversemos sobre cómo puedo aportar valor técnico a tus proyectos.",
    infoTitle: "Canales de Contacto Directo",
    infoSubtitle: "Revisión ágil para reclutadores y líderes técnicos.",
    emailLabel: "Correo Electrónico Directo",
    phoneLabel: "Teléfono / WhatsApp",
    locationLabel: "Ubicación & Disponibilidad",
    locationValue: "Santiago / Concepción, Chile — Remoto / Híbrido / Presencial",
    socialLabel: "Perfiles Profesionales",
    availabilityBadge: "Disponible para contratación inmediata",
    form: {
      name: "Nombre / Empresa",
      namePlaceholder: "Ej. María González (Empresa o Reclutador)",
      email: "Correo Corporativo o Personal",
      emailPlaceholder: "maria@empresa.com",
      subject: "Asunto / Posición",
      subjectPlaceholder: "Oportunidad Desarrollador Full Stack / Entrevista",
      message: "Detalles de la propuesta o vacante",
      messagePlaceholder: "Describe brevemente el rol, stack tecnológico y los objetivos...",
      submit: "Enviar Mensaje Directo",
      sending: "Enviando mensaje...",
      successTitle: "¡Mensaje Enviado Correctamente!",
      successMessage: "Muchas gracias por tu interés. Responderé a tu propuesta a la brevedad.",
      errorTitle: "Error al enviar mensaje",
      errorMessage: "Ocurrió un problema de envío. Puedes contactarme directamente a mi correo electrónico.",
      sendAnother: "Enviar otro mensaje",
    },
  },
  footer: {
    builtWith: "Desarrollado con Next.js, Tailwind CSS y TypeScript. Alto rendimiento y accesibilidad.",
    rights: "Todos los derechos reservados.",
    backToTop: "Subir al inicio",
  },
};

export type Translations = typeof es;

