# Copilot instructions for yesser-portfolio

Purpose
- Provide repository-specific guidance so Copilot sessions (agents or CLI) can operate accurately and efficiently.

Quick commands
- Install: `pnpm install`
- Dev (local): `pnpm dev` (alias for `astro dev`). The repo also documents running the dev server in background mode: `astro dev --background` (see AGENTS.md/CLAUDE.md). Manage background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.
- Build: `pnpm build` -> outputs to `./dist`
- Preview build: `pnpm preview`
- Astro CLI: `pnpm astro -- <args>` or `pnpm astro` (script present)

Tests & lint
- No test or lint scripts were found in package.json. If tests are added, use the relevant runner script (e.g., `pnpm test`) and run a single test with that test runner's filtering flags (e.g., `vitest -t "test name"` or `jest path/to/file`).

Environment
- Node engine required: >=22.12.0 (see package.json -> engines)
- Package manager: pnpm

High-level architecture (big picture)
- Framework: Astro + TypeScript + Tailwind CSS. Tailwind is integrated via `@astrojs/tailwind` (see astro.config.mjs).
- Source layout (important directories):
  - `src/components/` — UI components organized into subfolders: `layout/`, `sections/`, `ui/`.
  - `src/pages/` — top-level routes (e.g., `index.astro`). Pages compose layout + sections.
  - `src/content/` — content (blog, projects, structured data).
  - `src/lib/` — utilities and helpers.
  - `src/styles/` — global styles (Tailwind entry).
  - `public/` — static assets served as-is.
- Build output: `dist/`

Key conventions (repo-specific)
- Absolute import aliases (configured in tsconfig.json). Copilot should prefer these when suggesting imports:
  - `@components/*` -> `src/components/*`
  - `@layout/*` -> `src/components/layout/*`
  - `@sections/*` -> `src/components/sections/*`
  - `@ui/*` -> `src/components/ui/*`
  - `@blog/*` -> `src/components/blog/*`
  - `@content/*` -> `src/content/*`
  - `@lib/*` -> `src/lib/*`
  - `@styles/*` -> `src/styles/*`

- Component structure:
  - `BaseLayout.astro` is used as the site framing component. Pages import `BaseLayout` and pass `slot` sections like `header` and content sections.
  - `sections/` contains page sections (Hero, TechStack, ImpactMetrics) — treat these as composable blocks rather than isolated pages.

- Styling: Tailwind utilities drive styling. Keep global config in `src/styles/global.css` and prefer utility classes inside components.

AI / agent guidance
- AGENTS.md and CLAUDE.md exist at repo root and already recommend `astro dev --background`. Copilot/agents should follow that pattern for long-running dev server tasks.
- When modifying build or CLI scripts, update this file and AGENTS.md/CLAUDE.md so all agents see consistent instructions.

Files of note to consult quickly
- `package.json` — scripts, engines, deps
- `tsconfig.json` — absolute import aliases
- `astro.config.mjs` — integrations (tailwind)
- `AGENTS.md`, `CLAUDE.md` — existing agent hints

When to ask for human input (use ask_user)
- Any architectural change (add new routing patterns, change content model, add SSR endpoints)
- Adding test or lint frameworks (ask which runner & conventions preferred)

If you want, I can:
- Add recommended test/lint scripts (e.g., vitest + eslint) and scaffold config
- Configure an MCP server (Playwright or similar) for browser tests — say "yes" to proceed

---
Generated and placed at `.github/copilot-instructions.md`. Please tell me if you want this expanded (e.g., include example import snippets, or add testing/linting scaffolding).