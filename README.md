# Cristóbal Rivas Paul — Portfolio

Personal site and technical case-study portfolio. Built with **Next.js (App Router) · TypeScript · Tailwind CSS v4**, bilingual (ES/EN), dark-only, and audited for **WCAG 2.1 AA** contrast.

Positioning: Full Stack Developer — backend architecture with Node.js and Python, API contract design and modern frontend with TypeScript/React/Next.js, driven by Spec-Driven Development (SDD) and agentic acceleration.

## Getting started

```bash
npm ci
npm run dev        # http://localhost:3000
```

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Dev server (webpack) |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run build` | Production build |
| `npm run verify` | lint + typecheck + build (same gate as CI) |

## Content architecture

Copy is fully decoupled from presentation. Components render; they never author content.

```
src/
├── data/                     # Single source of truth (content, no UI imports)
│   ├── profile.ts            # Identity, tagline, CV, WhatsApp, social links
│   ├── about.ts              # About section paragraphs (ES + EN)
│   ├── skills.ts             # Tech stack grouped by engineering domain
│   ├── projects.ts           # Case-study model: problem, solution,
│   │                         # technical challenges, stack, links
│   └── terminal.ts           # Hero terminal snippets
├── locales/                  # UI chrome strings (buttons, labels, nav) ES + EN
├── components/
│   ├── layout/               # Navbar, footer, language toggle
│   ├── sections/             # Hero, About, Skills, Projects, Contact
│   └── ui/                   # Button, Badge, Card, Modal, Icons
└── app/                      # Routes, metadata, JSON-LD, global styles
```

To edit what the site says → `src/data/`. To edit what a button is called → `src/locales/`.

## Design tokens & accessibility

- **Palette:** black / gray / orange only (`globals.css` → `@theme`). Site is dark-only (`color-scheme: dark`).
- **Contrast (verified):** `ink` ≈ 15.9:1 · `ash` ≈ 6.9:1 · `accent` ≈ 7.0:1 · primary buttons render `canvas` text on `accent` ≈ 7.0:1 — all above AA (4.5:1 normal text, 3:1 large text/UI).
- **Responsive:** mobile-first, verified from 360px to 4K, no horizontal overflow (`overflow-x: hidden` + terminal uses `whitespace-pre-wrap`).
- **Motion:** honors `prefers-reduced-motion`.
- **Interactive markup:** links styled as buttons use exported `buttonClass()` — no `<button>` nested inside `<a>`.

## Git workflow (GitHub)

```
main ──────────────────────────► production (deployed)
  ▲                                ▲
  │ PR: develop → main             │ PR: feature/* → develop
  │ (review + green CI)            │ (review + green CI)
develop ◄──────────────────────── feature/<name>
  ▲
  └── cut from main
```

1. `git checkout develop` (integration branch, copy of `main`)
2. `git checkout -b feature/<scope>-<summary> develop`
3. Implement, commit using [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `refactor:`, `chore:`)
4. `npm run verify` — must pass locally
5. Push and open a PR **feature → develop**; CI runs lint + typecheck + build
6. After review/merge into `develop`, verify the integration branch
7. Open a PR **develop → main**; merging deploys

CI runs on every push/PR to `develop` and `main` (`.github/workflows/ci.yml`); PRs use `.github/pull_request_template.md` with an accessibility/responsive checklist.

## Deploy

Pushing to `main` triggers deployment (Vercel or any Node host). Set `NEXT_PUBLIC_SITE_URL` to the production origin so metadata, sitemap and JSON-LD resolve correctly.
