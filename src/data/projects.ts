export interface ProjectRepo {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: {
    es: string;
    en: string;
  };
  fullDescription: {
    es: string;
    en: string;
  };
  category: "fullstack" | "frontend" | "backend";
  tags: string[];
  isPrivate: boolean;
  featured: boolean;
  /** Primary repository — drives the GitHub button on the card. */
  githubUrl?: string;
  /** All repositories, rendered as action buttons inside the case-study modal. */
  repos?: ProjectRepo[];
  demoUrl?: string;
  features: {
    es: string[];
    en: string[];
  };
  architecture: {
    es: string;
    en: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "domu",
    title: "DOMU — ERP Multi-tenant para Gestión de Condominios",
    shortDescription: {
      es: "ERP integral multi-tenant para administración de condominios: gastos comunes, reservas, control de accesos, incidentes y tablero Kanban. Proyecto de Título con Distinción Máxima.",
      en: "Multi-tenant ERP for condominium administration: common expenses, bookings, access control, incidents and a Kanban board. Thesis project graded Summa Cum Laude.",
    },
    fullDescription: {
      es: "DOMU es un ERP integral diseñado y desarrollado como Proyecto de Título, calificado con Distinción Máxima, para la administración de condominios con arquitectura Multi-tenant y modelo relacional normalizado en MySQL 8.0. Implementa módulos para el cálculo automatizado de gastos comunes, la reserva de espacios comunes y un tablero tipo Kanban para la asignación y seguimiento de tareas e incidencias operacionales del personal del edificio. El backend está construido en Java 21 con Javalin 6 y se encuentra en evolución hacia microservicios con Spring Boot.",
      en: "DOMU is a full ERP built as the thesis project, graded Summa Cum Laude, for condominium administration using a multi-tenant architecture and a normalized relational model on MySQL 8.0. It ships modules for automated common-expense calculation, common-area booking, and a Kanban board to assign and track operational tasks and incidents for the building staff. The backend is built on Java 21 with Javalin 6 and is evolving towards Spring Boot microservices.",
    },
    category: "fullstack",
    tags: ["React Native", "Java 21", "Javalin 6", "MySQL 8", "JWT", "BCrypt", "Gradle", "REST API"],
    isPrivate: false,
    featured: true,
    githubUrl: "https://github.com/Wasoner/domu-backend",
    repos: [
      { label: "Backend · Java", url: "https://github.com/Wasoner/domu-backend" },
      { label: "Frontend · React Native", url: "https://github.com/Wasoner/domu-frontend" },
    ],
    features: {
      es: [
        "Arquitectura Multi-tenant con modelo relacional normalizado en MySQL 8.0.",
        "Cálculo automatizado de gastos comunes, multas y seguimiento de pagos.",
        "Reserva de espacios comunes con control de disponibilidad.",
        "Tablero Kanban para asignar y seguir tareas e incidencias del personal.",
        "Registro de visitas e incidentes con control de acceso por roles.",
        "Autenticación con JWT, contraseñas con hash BCrypt y logging con SLF4J / Log4j2.",
      ],
      en: [
        "Multi-tenant architecture on a normalized relational model in MySQL 8.0.",
        "Automated common-expense calculation, penalties and payment tracking.",
        "Common-area booking with availability control.",
        "Kanban board to assign and track staff tasks and incidents.",
        "Visitor and incident logging with role-based access control.",
        "JWT authentication, BCrypt password hashing and SLF4J / Log4j2 logging.",
      ],
    },
    architecture: {
      es: "Backend en Java 21 expuesto con Javalin 6 siguiendo una arquitectura por capas (config, database, domain, dto, security, service, web). Pool de conexiones HikariCP, repositorios JDBC, migraciones SQL versionadas y dominio modelado con record por módulo (core, access, community, finance, facility, staff, ticket, vendor, voting). Seguridad con BCrypt (jbcrypt) y tokens JWT (java-jwt 4.4.0), configuración mediante variables de entorno. Frontend móvil en React Native y base de datos MySQL 8.0.",
      en: "Java 21 backend exposed through Javalin 6 with a layered architecture (config, database, domain, dto, security, service, web). HikariCP connection pool, JDBC repositories, versioned SQL migrations and a domain modelled with records per module (core, access, community, finance, facility, staff, ticket, vendor, voting). Security via BCrypt (jbcrypt) and JWT tokens (java-jwt 4.4.0), configuration through environment variables. React Native mobile frontend on a MySQL 8.0 database.",
    },
  },
  {
    id: "taskflow",
    title: "TaskFlow API — Gestión de Proyectos y Tareas",
    shortDescription: {
      es: "API REST de proyectos y tareas con FastAPI, PostgreSQL 16 y MongoDB 7, frontend en TypeScript y 18 pruebas de integración con pytest.",
      en: "Projects and tasks REST API built with FastAPI, PostgreSQL 16 and MongoDB 7, a TypeScript frontend and 18 pytest integration tests.",
    },
    fullDescription: {
      es: "API REST de gestión de proyectos y tareas construida como proyecto de práctica para demostrar competencias en desarrollo backend, bases de datos relacionales y NoSQL y documentación técnica. Implementa CRUD completo de usuarios, proyectos y tareas con validación estricta de entrada, paginación, documentación OpenAPI automática y trazabilidad de auditoría.",
      en: "A projects and tasks REST API built as a practice project to demonstrate backend development skills, relational and NoSQL database work, and technical documentation. It provides full CRUD for users, projects and tasks with strict input validation, pagination, automatic OpenAPI documentation and audit traceability.",
    },
    category: "backend",
    tags: ["Python 3.12", "FastAPI", "PostgreSQL 16", "MongoDB 7", "SQLAlchemy 2.1", "Pydantic v2", "TypeScript", "Docker", "pytest"],
    isPrivate: false,
    featured: true,
    githubUrl: "https://github.com/Wasoner/taskflow-api",
    repos: [{ label: "Repositorio · Python", url: "https://github.com/Wasoner/taskflow-api" }],
    features: {
      es: [
        "Arquitectura por capas: routers, schemas Pydantic, modelos SQLAlchemy y capa de datos.",
        "PostgreSQL 16 para datos transaccionales y MongoDB 7 para logs de auditoría.",
        "18 pruebas de integración con pytest: CRUD, códigos de estado y seguridad.",
        "Contraseñas con hash bcrypt; password_hash jamás se expone en respuestas HTTP.",
        "Restricciones CHECK, UNIQUE y claves foráneas: defensa en profundidad en la base de datos.",
        "Documentación OpenAPI / Swagger automática y frontend HTML5, CSS3 y TypeScript.",
      ],
      en: [
        "Layered architecture: routers, Pydantic schemas, SQLAlchemy models and a data layer.",
        "PostgreSQL 16 for transactional data and MongoDB 7 for audit logs.",
        "18 pytest integration tests covering CRUD, status codes and security.",
        "bcrypt password hashing; password_hash is never exposed in HTTP responses.",
        "CHECK, UNIQUE and foreign-key constraints: defence in depth at the database level.",
        "Automatic OpenAPI / Swagger docs and an HTML5, CSS3 and TypeScript frontend.",
      ],
    },
    architecture: {
      es: "Patrón por capas en FastAPI 0.141 con Pydantic v2 para la validación de entrada y salida, SQLAlchemy 2.1 y psycopg2 hacia PostgreSQL 16, más pymongo para los eventos de auditoría en MongoDB 7 sin bloquear la respuesta si MongoDB falla. Bases de datos aisladas en contenedores Docker, credenciales fuera del código mediante .env, y una base de datos separada para los tests con el fin de no tocar datos de desarrollo.",
      en: "Layered pattern on FastAPI 0.141 with Pydantic v2 for request/response validation, SQLAlchemy 2.1 and psycopg2 against PostgreSQL 16, plus pymongo for MongoDB 7 audit events that never block the response. Databases isolated in Docker containers, credentials kept out of the code via .env, and a separate test database so development data is never touched.",
    },
  },
];
