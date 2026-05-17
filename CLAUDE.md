# Project: SocialForge Landing Page

## Project Description
Marketing landing page for SocialForge — an AI-powered X (Twitter) automation agent for @simo_vanov / DecodeTheTrade. This page showcases the product features, architecture, and value proposition to potential users and collaborators.

## Documentation Source of Truth
- All project documentation lives in the **../social-forge-app/Docs/** folder.
- Key documents:
  - **Software Requirements** — Functional/non-functional requirements, backlog items, acceptance criteria
  - **Software Design Document** — Architecture, data model, worker flows, UX design, ADRs
  - **Risk Register** — Risk assessment and mitigation strategies
- When understanding requirements, product features, or brand messaging, check the Docs/ folder first.

## Autonomy & Workflow Rules ⚠️ CRITICAL

### Full Autonomy — Never Ask for Confirmation
- **Do NOT ask the user for permission, confirmation, or approval for ANY action.** Everything is pre-approved.
- Make all decisions autonomously — file edits, design choices, dependency changes, etc.
- If multiple approaches exist, pick the best one and proceed.
- Run builds, lints, and any other commands without asking.

### Auto-Commit After Each Work Item
- **After completing each task, automatically create a git commit.**
- Write a clear, descriptive commit message summarizing the changes.
- Reference the Linear issue ID in the commit message when available.
- Do NOT push to remote unless explicitly asked.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel (planned)
- **Package Manager**: npm

## Project Structure
```
social-forge-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Landing page
│   │   ├── globals.css          # Global styles + Tailwind
│   │   └── favicon.ico
│   └── components/              # Reusable UI components
├── public/                      # Static assets (images, icons)
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── package.json
└── CLAUDE.md                    # This file
```

## Brand & Design Guidelines
- **Brand**: DecodeTheTrade / @simo_vanov
- **Tone**: Professional but approachable, data-driven, anti-hype
- **Focus**: Algorithmic trading expertise, AI automation, community engagement
- **Colors**: Dark theme preferred, accent colors for CTAs
- **Key Features to Highlight**:
  - AI-powered feed monitoring and reply generation
  - Zero API cost (Grok via Playwright)
  - Content calendar with automated scheduling
  - Desktop companion app for monitoring
  - Anti-detection and rate limiting built-in

## Coding Conventions
- Use TypeScript strict mode
- Functional components with React hooks
- Tailwind utility classes (avoid custom CSS where possible)
- Use `@/*` import alias for src directory
- Components in PascalCase, utilities in camelCase
- Prefer server components, use `"use client"` only when needed

## Documentation

This repo follows the cross-project AI-management docs convention. The canonical spec lives at `../../ProjectTemplate/docs/specs/2026-05-10-ai-management-pattern-design.md`.

Reading order on entering this repo:

1. `CLAUDE.md` (this file) — long-lived project facts.
2. `docs/README.md` — one-page index of reference areas and active work.
3. `docs/in-flight/` — every feature currently being worked on; freshest truth.
4. `docs/reference/<area>.md` — current system behaviour, by area.
5. `docs/ARCHITECTURE-CHANGES.md` — recent flux.
6. Active `docs/specs/` + `docs/plans/`.
7. Shipped `docs/specs/` only when investigating *why* a past decision was made.
8. `docs/decisions/` — ADRs.

Reference docs currently maintained:

- `docs/reference/architecture.md` — Next.js 15 App Router layout, build pipeline, hosting topology.
- `docs/reference/pages-and-routes.md` — the single `/` landing page and its 10 in-page sections.
- `docs/reference/social-forge-app-integration.md` — how the landing links to the desktop app; product-doc source of truth (`../social-forge-app/Docs/`).
- `docs/reference/deployment.md` — multi-stage `Dockerfile` + `next.config.ts` standalone output + CI.
- `docs/reference/seo.md` — `metadata` export, favicon/icon conventions, current gaps.

New specs / plans / ideas / ADRs follow the templates in `docs/_templates/`. Every `*.md` under `docs/` MUST carry valid front-matter.
