---
status: index
last_updated: 2026-05-17
---

# SocialForge Landing — Documentation

Marketing/landing site for SocialForge — the AI-powered X (Twitter) desktop growth agent. This repo follows the per-project AI-management pattern defined in the canonical spec at [`../../ProjectTemplate/docs/specs/2026-05-10-ai-management-pattern-design.md`](../../ProjectTemplate/docs/specs/2026-05-10-ai-management-pattern-design.md).

The main SocialForge product repo is `../social-forge-app/`. Pricing, feature claims, and brand voice on this site must stay in sync with that product's `Docs/` (software requirements + design).

## Reading order

When entering a fresh session, read in this order:

1. `../CLAUDE.md` — long-lived project facts (stack, brand, autonomy rules).
2. **This file** — index of reference areas and active work.
3. `in-flight/` — every feature currently being worked on; freshest truth.
4. `reference/<area>.md` — current system behaviour, by area.
5. `ARCHITECTURE-CHANGES.md` — recent flux.
6. Active `specs/` + `plans/` (status: draft / approved / active) — what's about to change.
7. Shipped `specs/` only when investigating *why* a past decision was made — never as current truth.
8. `decisions/` — ADRs (when researching trade-offs).

## Folder map

| Folder | Purpose | Mutability |
|---|---|---|
| `ideas/` | Captured seeds, lowest commitment | Mutable |
| `research/` | Findings & investigations | Append-only |
| `specs/` | Design docs (active + shipped) | Immutable on ship |
| `plans/` | Implementation plans (active + shipped) | Immutable on ship |
| `in-flight/` | Per-feature working state for the current session | Highly mutable; deleted on ship |
| `reference/` | Living docs of current system behaviour | Edited on every ship |
| `decisions/` | ADRs — irreversible architectural choices | Append-only |
| `_templates/` | Skeletons for each stage | Copied from ProjectTemplate |
| `ARCHITECTURE-CHANGES.md` | Changelog of architectural changes | Append-only |

## Reference areas (current system docs)

| Area | File | What it covers |
|---|---|---|
| Architecture | [`reference/architecture.md`](reference/architecture.md) | Next.js 15 App Router layout, single-page structure, build pipeline, hosting topology |
| Pages & routes | [`reference/pages-and-routes.md`](reference/pages-and-routes.md) | Single `/` landing page with its 10 in-page anchor sections (hero → final CTA) |
| SocialForge app integration | [`reference/social-forge-app-integration.md`](reference/social-forge-app-integration.md) | How the landing links to the desktop app, where download/checkout terminate, doc source-of-truth contract |
| Deployment | [`reference/deployment.md`](reference/deployment.md) | Multi-stage `Dockerfile`, Next.js `standalone` output, CI workflow, target host |
| SEO & metadata | [`reference/seo.md`](reference/seo.md) | Page metadata, favicon/logo assets, social/share story, robots/sitemap status |

_(Add a new row whenever a `reference/<area>.md` file is added or renamed.)_

## Active work

_(Updated at session end by the agent. Lists everything currently in `in-flight/`.)_

- _none._

## Recent ships

_(Quick links to the most recent shipped specs + plans. Empty until the first feature ships under this convention.)_

- _none._

## Decisions (ADRs)

_(None recorded yet. Future architectural choices that are irreversible or contentious should land here as `decisions/NNNN-<slug>.md`.)_
