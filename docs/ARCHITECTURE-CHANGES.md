# Architecture Changes

## 2026-05-17 — Docs adopted AI-management folder convention

### What Changed

- **`docs/`** bootstrapped from scratch — this repo had no `docs/` folder before today. Structure follows the per-project AI-management pattern (canonical spec: `ProjectTemplate/docs/specs/2026-05-10-ai-management-pattern-design.md`).
- **New folders** (each with a `.gitkeep` for now): `ideas/`, `research/`, `specs/`, `plans/`, `in-flight/`, `reference/`, `decisions/`, `_templates/`.
- **Templates** copied as-is from `C:\Projects\ProjectTemplate\docs\_templates\` into `docs/_templates/`: `idea.md`, `research.md`, `spec.md`, `plan.md`, `in-flight.md`, `reference.md`, `decision.md`, `.gitkeep`.
- **New file**: `docs/README.md` — one-page index with reading order, folder map, reference-area catalogue.
- **New reference docs** capturing the site's current behaviour (all with `area:` + `last_updated: 2026-05-17` front-matter):
  - `reference/architecture.md` — Next.js 15 App Router layout, single-page structure, build pipeline
  - `reference/pages-and-routes.md` — the one `/` route and its 10 conversion-funnel sections
  - `reference/social-forge-app-integration.md` — landing-to-product contract, doc source-of-truth pointer to `../social-forge-app/Docs/`
  - `reference/deployment.md` — multi-stage Dockerfile + `next.config.ts standalone` output + CI workflow
  - `reference/seo.md` — `metadata` export, favicon/icon conventions, current gaps
- **`CLAUDE.md`** updated: appended a Documentation section pointing at `docs/README.md` with the project-wide reading order. Existing content (tech stack, brand, autonomy rules, conventions) preserved verbatim.

### Why

The 14+ active repos under `C:\Projects\` had diverged into ad-hoc docs shapes. The AI-management pattern gives every repo the same folder structure + reading order, so any agent (or human) entering any repo finds the same shape, knows what to read first, and knows where to write. `social-forge-landing` previously had no docs at all — relevant context was scattered between `CLAUDE.md` (this repo) and `../social-forge-app/Docs/` (product repo). This commit brings the landing repo into the convention without duplicating product docs.

### System Behavior After This Change

- New specs go in `docs/specs/YYYY-MM-DD-<slug>-design.md` (via `superpowers:brainstorming`).
- New plans go in `docs/plans/YYYY-MM-DD-<slug>.md` (via `superpowers:writing-plans`).
- Active feature working-state goes in `docs/in-flight/<slug>.md` (auto-created by execution skills from `_templates/in-flight.md`).
- Current-system-behaviour docs go in `docs/reference/<area>.md` (edited on every ship).
- ADRs go in `docs/decisions/NNNN-<slug>.md` (append-only).
- Every `*.md` under `docs/` must carry front-matter (mandated by the convention).
- Reading order for any future session is codified in `docs/README.md` and matches `C:\Projects\CLAUDE.md`.
- Product-level docs (software requirements, software design document, risk register) remain in `../social-forge-app/Docs/` — this repo's `docs/` is only for the marketing site itself.

### Follow-up Work (not in this change)

- Wire real download / checkout CTAs (currently `#download` and `href="#"` placeholders) — likely a small spec + plan under this convention once the payment provider is chosen.
- Replace the boilerplate `README.md` with project-specific guidance.
- Decide on production hostname and finalise the deployment workflow; update `reference/deployment.md` and `reference/seo.md` (canonical URL, OG image) accordingly.
- Remove unused default Next.js SVGs from `public/` (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`).
