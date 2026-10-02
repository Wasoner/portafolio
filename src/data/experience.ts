export interface ExperienceItem {
  id: string;
  type: "work" | "education";
  role: {
    es: string;
    en: string;
  };
  organization: string;
  period: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  skills: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-gstore-fs",
    type: "work",
    role: {
      es: "Desarrollador Full Stack",
      en: "Full Stack Developer",
    },
    organization: "g-store SpA — Chile",
    period: {
      es: "Ene. 2024 — Dic. 2024",
      en: "Jan. 2024 — Dec. 2024",
    },
    description: {
      es: "Desarrollo y soporte de plataformas SaaS B2B, sistemas ERP y E-commerce a medida con Angular en el frontend, servicios backend en PHP y persistencia en Microsoft SQL Server. Diseñé e integré endpoints y APIs RESTful para inventarios, pedidos, facturación y reportería comercial, y participé en el análisis de integración de la pasarela Transbank Webpay. Trabajé en sprints ágiles (Scrum) presentando funcionalidades ante clientes finales y gerencia.",
      en: "Built and maintained custom B2B SaaS platforms, ERP and e-commerce systems using Angular on the frontend, PHP services, and Microsoft SQL Server persistence. Designed and integrated RESTful endpoints for inventory, orders, billing and commercial reporting, and took part in the Transbank Webpay payment-gateway integration. Worked in agile Scrum sprints, demoing features to end clients and management.",
    },
    skills: ["Angular", "PHP", "Microsoft SQL Server", "REST API", "Transbank Webpay", "Scrum"],
  },
  {
    id: "exp-gstore-web",
    type: "work",
    role: {
      es: "Desarrollador Web (Práctica Profesional)",
      en: "Web Developer (Professional Internship)",
    },
    organization: "g-store SpA — Chile",
    period: {
      es: "Jul. 2023 — Dic. 2023",
      en: "Jul. 2023 — Dec. 2023",
    },
    description: {
      es: "Contribución al desarrollo Full Stack de módulos web en un entorno productivo real: implementación de componentes en Angular, apoyo en la lógica de negocio y depuración de backend, resolución de incidencias, testing funcional y optimización de consultas en base de datos.",
      en: "Contributed to full-stack development of web modules in a real production environment: built Angular components, supported business logic and backend debugging, resolved incidents, performed functional testing and optimized database queries.",
    },
    skills: ["Angular", "Testing Funcional", "Depuración", "Optimización de Queries"],
  },
  {
    id: "edu-ubb",
    type: "education",
    role: {
      es: "Ingeniería Civil en Informática — Titulado",
      en: "Civil Engineering in Computer Science — Degree",
    },
    organization: "Universidad del Bío-Bío — Concepción, Chile",
    period: {
      es: "Mar. 2020 — Abr. 2026",
      en: "Mar. 2020 — Apr. 2026",
    },
    description: {
      es: "Proyecto de Título calificado con Distinción Máxima: DOMU, un ERP multi-tenant para administración de condominios construido con React Native, Java (Javalin y Spring Boot) y MySQL 8.0, con módulos de gastos comunes, reservas, control de accesos y tablero Kanban.",
      en: "Thesis project graded Summa Cum Laude: DOMU, a multi-tenant ERP for condominium administration built with React Native, Java (Javalin and Spring Boot) and MySQL 8.0, covering common expenses, bookings, access control and a Kanban board.",
    },
    skills: ["Proyecto de Título", "Distinción Máxima", "Multi-tenant", "MySQL 8"],
  },
  {
    id: "edu-uchile",
    type: "education",
    role: {
      es: "Intercambio Académico Nacional — Programa CUECH",
      en: "National Academic Exchange — CUECH Program",
    },
    organization: "Universidad de Chile — Santiago, Chile",
    period: {
      es: "Mar. 2023 — Ago. 2023",
      en: "Mar. 2023 — Aug. 2023",
    },
    description: {
      es: "Cursé Ingeniería de Software, Minería de Datos y Programación de Sistemas. Lideré la planificación de sprints ágiles del equipo de trabajo y actué como presentador principal de los proyectos de software ante auditorio.",
      en: "Took Software Engineering, Data Mining and Systems Programming courses. Led the team's agile sprint planning and served as the main presenter of the software projects to the audience.",
    },
    skills: ["Ingeniería de Software", "Minería de Datos", "Scrum", "Presentación Técnica"],
  },
  {
    id: "edu-certs",
    type: "education",
    role: {
      es: "Certificaciones e Idiomas",
      en: "Certifications & Languages",
    },
    organization: "DataCamp & EF",
    period: {
      es: "2026",
      en: "2026",
    },
    description: {
      es: "Git Intermedio (DataCamp, 2026) · IA Aplicada al Trabajo (DataCamp, 2026). Inglés nivel B2 Intermedio-Avanzado (certificado EF) con lectura técnica fluida y español nativo.",
      en: "Intermediate Git (DataCamp, 2026) · AI Applied to Work (DataCamp, 2026). English B2 Upper-Intermediate (EF certificate) with fluent technical reading, and native Spanish.",
    },
    skills: ["Git", "IA Aplicada", "Inglés B2", "Español Nativo"],
  },
];
