---
area: architecture
last_updated: 2026-05-17
---

# Architecture

## What it does

`social-forge-landing` is the public marketing site for SocialForge — a long-form, single-page Next.js 15 (App Router) application that pitches the desktop agent and converts visitors into one-time `EUR 30` lifetime buyers. There is no backend, no database, no auth, and no API routes — every page is statically renderable React Server Components with one `metadata` export and Tailwind CSS v4 styling.

## Components

- `src/app/layout.tsx` — root layout. Sets `<html lang="en">`, loads Geist + Geist Mono via `next/font/google`, exports the page `metadata` (title + description for SEO and link previews), and wraps children in the antialiased body.
- `src/app/page.tsx` — the entire landing page. One default-exported `Home` React Server Component containing all 10 conversion-funnel sections in order: nav, hero, problem, solution, features, how-it-works, comparison, pricing, guarantee, FAQ, final CTA, footer.
- `src/app/globals.css` — Tailwind v4 entry (`@import "tailwindcss"`) plus the design tokens (`--background`, `--surface-1/2`, `--card`, `--card-border`, `--accent`, gradient palette) and bespoke utility classes (`.gradient-text`, `.glow`, `.glow-strong`, `.card-hover`, `.noise-overlay`, `.section-divider`).
- `public/` — static assets served at `/`. Brand logo (`logo.png`), favicon, plus default Next.js placeholder SVGs that the page does not actually reference.

## Entry points / interfaces

- HTTP: a single route `/` rendered by `src/app/page.tsx`.
- All CTAs are in-page anchor links (`#features`, `#how-it-works`, `#pricing`, `#faq`, `#download`). The actual purchase / download link target is `#download` / `#` placeholder — not yet wired to a checkout provider.
- No `/api/*` routes. No middleware. No server actions.

## Dependencies

- **Runtime**: `next@16.1.6`, `react@19.2.3`, `react-dom@19.2.3`.
- **Styling**: `tailwindcss@^4`, `@tailwindcss/postcss@^4` (configured via `postcss.config.mjs`; no `tailwind.config.ts` — v4 uses CSS-first config in `globals.css`).
- **Tooling**: `typescript@^5`, `eslint@^9` with `eslint-config-next@16.1.6` (config in `eslint.config.mjs`, flat config format).
- **Build output**: `next.config.ts` sets `output: "standalone"` so the Dockerfile can ship a minimal runtime image.
- **External**: no third-party SDKs, no analytics, no payment provider integrated yet.

## Known gaps / accepted debt

- "Get SocialForge Now" / final CTA `href="#"` and `href="#download"` — checkout flow is not yet implemented; both terminate at in-page anchors. A real purchase link (Stripe Payment Link, Lemon Squeezy, Polar, etc.) is the next obvious gap.
- No analytics, no consent banner, no privacy/terms pages — fine while pre-launch but blocks paid acquisition.
- `README.md` is still the boilerplate `create-next-app` text. Replace with project-specific guidance whenever the next substantive change lands.
- `public/` still contains unused default Next.js SVGs (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`).
