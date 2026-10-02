export const es = {
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    projects: "Proyectos",
    experience: "Experiencia",
    contact: "Contacto",
    downloadCV: "Descargar CV",
  },
  hero: {
    greeting: "Hola, soy",
    name: "Cristóbal Rivas Paul",
    subtitle:
      "Ingeniero Civil en Informática · Especializado en APIs RESTful y SaaS",
    viewProjects: "Ver Proyectos",
    contactMe: "Contacto",
  },
  about: {
    badge: "Conóceme",
    title: "Construyendo soluciones de software de extremo a extremo",
    paragraph1:
      "Soy Ingeniero Civil en Informática titulado de la Universidad del Bío-Bío, enfocado en transformar requerimientos complejos en aplicaciones digitales fluidas, mantenibles y de alto rendimiento.",
    paragraph2:
      "Mi experiencia abarca desde interfaces modernas con React, React Native y Angular, hasta servicios backend robustos en Java (Spring Boot, Javalin) y PHP, integrados con bases de datos relacionales (MySQL, SQL Server, PostgreSQL) y no relacionales (MongoDB).",
    paragraph3:
      "Destaco por una comunicación asertiva, liderazgo técnico natural, trabajo colaborativo bajo metodologías ágiles (Scrum) y rapidez para el aprendizaje autónomo e incorporación de nuevas tecnologías.",
    highlights: [
      {
        title: "Frontend & Mobile",
        desc: "Interfaces modernas con React, React Native y Angular, Tailwind CSS y Bootstrap, con foco en diseño responsivo y accesible.",
      },
      {
        title: "Backend & APIs",
        desc: "Servicios robustos en Java (Spring Boot, Javalin) y PHP, APIs RESTful y arquitectura por capas con autenticación JWT.",
      },
      {
        title: "Bases de Datos & Modelado",
        desc: "MySQL, SQL Server, PostgreSQL y MongoDB, modelado entidad-relación y optimización de consultas.",
      },
      {
        title: "Herramientas & Buenas Prácticas",
        desc: "Git, GitHub, Docker, Postman, Scrum, Clean Code y asistentes de IA (Claude Code, Cursor, Codex).",
      },
    ],
  },
  projects: {
    badge: "Portafolio",
    title: "Proyectos Destacados",
    subtitle: "Una selección de sistemas completos y APIs publicados en mi cuenta de GitHub.",
    filterAll: "Todos",
    filterFullstack: "Full Stack",
    filterFrontend: "Frontend",
    filterBackend: "Backend",
    viewDetails: "Ver Caso de Estudio",
    viewLive: "Demo en Vivo",
    viewGithub: "Código Fuente",
    privateRepo: "Repositorio Privado / Empresa",
    techStack: "Tecnologías utilizadas",
    keyFeatures: "Características Principales",
    architecture: "Arquitectura & Desafíos",
    closeModal: "Cerrar",
    gallery: "Galería del Proyecto",
    repositories: "Repositorios",
  },
  experience: {
    badge: "Trayectoria",
    title: "Experiencia & Formación",
    subtitle: "Mi camino profesional y formación académica en el mundo del desarrollo de software.",
    workTab: "Experiencia Laboral",
    educationTab: "Educación & Certificaciones",
    present: "Presente",
  },
  contact: {
    badge: "Hablemos",
    title: "¿Tienes una idea o proyecto en mente?",
    subtitle: "Estoy abierto a oportunidades laborales, proyectos freelance y colaboraciones técnicas.",
    infoTitle: "Información de Contacto",
    infoSubtitle: "Ponte en contacto directo o a través del formulario.",
    emailLabel: "Correo Electrónico",
    phoneLabel: "Teléfono",
    locationLabel: "Ubicación",
    locationValue: "Santiago / Concepción, Chile — Remoto / Híbrido / Presencial",
    socialLabel: "Redes & Perfiles",
    form: {
      name: "Tu Nombre",
      namePlaceholder: "Ej. Carlos Mendoza",
      email: "Tu Correo Electrónico",
      emailPlaceholder: "carlos@ejemplo.com",
      subject: "Asunto",
      subjectPlaceholder: "Propuesta de Proyecto / Oferta de Empleo",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto, objetivos y plazos...",
      submit: "Enviar Mensaje",
      sending: "Enviando...",
      successTitle: "¡Mensaje Enviado con Éxito!",
      successMessage: "Gracias por contactarme. Te responderé a la brevedad posible.",
      errorTitle: "Error al enviar",
      errorMessage: "Hubo un problema. Por favor inténtalo nuevamente o contáctame por email.",
      sendAnother: "Enviar otro mensaje",
    },
  },
  footer: {
    builtWith: "Diseñado y desarrollado con Next.js, Tailwind CSS y Framer Motion.",
    rights: "Todos los derechos reservados.",
    backToTop: "Volver arriba",
  },
};

export type Translations = typeof es;
