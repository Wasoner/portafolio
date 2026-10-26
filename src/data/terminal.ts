/**
 * Content rendered inside the interactive hero terminal.
 *
 * Pure strings (JSON / YAML / Markdown) kept out of the component so the
 * terminal can be re-skinned without touching copy, and copy can be edited
 * without touching markup. English-only: these are code artifacts.
 */
export interface TerminalSnippet {
  stack: string;
  architecture: string;
  philosophy: string;
}

export const terminalSnippets: TerminalSnippet = {
  stack: `{
  "engineer": "Cristóbal Rivas Paul",
  "role": "Full Stack Developer",
  "core_stack": {
    "backend": [
      "Node.js (Express, NestJS)",
      "Python (FastAPI)"
    ],
    "frontend": [
      "TypeScript", "React", "Next.js",
      "Angular", "Vue.js"
    ],
    "persistence": [
      "PostgreSQL", "MongoDB"
    ],
    "infrastructure": [
      "Docker", "GitHub Actions", "Linux", "Git"
    ]
  },
  "focus": "Scalable APIs, modular architectures & SDD"
}`,
  architecture: `# Architectural Blueprint & Standards
specification:
  - Spec-Driven Development (SDD)
  - Formal API contracts (OpenAPI / Swagger)
  - Contract-first validation with schema typing
patterns:
  - Clean Architecture & layered domain design
  - Modular boundaries with strict end-to-end typing
  - RESTful APIs with versioned, testable endpoints
security:
  - JWT token validation & claims verification
  - BCrypt cryptographic salted hashing
  - DB defense-in-depth (CHECK & UNIQUE constraints)
delivery:
  - CI/CD with GitHub Actions
  - Agentic scaffolding & unit-test generation`,
  philosophy: `## Engineering Principles

1. Specification first: define the contract before the code.
2. Maintainability: readability precedes cleverness.
3. Resilience: fail gracefully, log meaningfully.
4. Measurement: benchmark bottlenecks, never guess.
5. AI-assisted, human-owned: agents accelerate, engineers own quality.`,
};
