/**
 * About section content.
 *
 * Kept out of the locale files because this is narrative content (what the
 * section says), not UI chrome (what a button is called). The presentation
 * layer reads it as-is; translations ship side by side in the same record.
 */
export interface LocalizedText {
  es: string;
  en: string;
}

export const aboutContent = {
  paragraphs: [
    {
      es: "Desarrollador de software enfocado en construir productos digitales robustos, mantenibles y de alto rendimiento. Mi enfoque combina clean code, tipado estricto de extremo a extremo y arquitectura modular, asegurando consistencia entre la lógica de servidor y la experiencia de usuario.",
      en: "Software developer focused on building robust, maintainable, high-performance digital products. My approach combines clean code, strict end-to-end typing and modular architecture, ensuring consistency between server-side logic and the user experience.",
    },
    {
      es: "Trabajo mediante Spec-Driven Development (SDD), definiendo primero especificaciones formales y contratos de API (OpenAPI/Swagger) antes de la implementación. Este enfoque me permite integrar de forma rigurosa agentes autónomos de IA en el ciclo de desarrollo para acelerar scaffolding, generación de pruebas unitarias y refactorización continua, sin comprometer la estabilidad del sistema.",
      en: "I work with Spec-Driven Development (SDD), defining formal specifications and API contracts (OpenAPI/Swagger) before implementation. This approach lets me rigorously integrate autonomous AI agents into the development cycle to accelerate scaffolding, unit test generation and continuous refactoring without compromising system stability.",
    },
  ] as LocalizedText[],
};
