## Summary

<!-- What changed and why. Link the issue/ticket if there is one. -->

## Type of change

- [ ] `feat` — new content or section
- [ ] `refactor` — UI / component architecture without behavior change
- [ ] `fix` — bug fix
- [ ] `chore` — tooling, CI, dependencies

## Checklist

- [ ] `npm run verify` passes locally (lint + typecheck + build)
- [ ] No copy hardcoded in components — content lives in `src/data/` or `src/locales/`
- [ ] ES and EN locales updated together (no half-translated strings)
- [ ] WCAG AA contrast verified for any new text/buttons/icons (4.5:1 normal text)
- [ ] Layout checked from 360px to wide screens — no horizontal overflow
- [ ] Palette stays black / gray / orange (no off-palette hues introduced)
