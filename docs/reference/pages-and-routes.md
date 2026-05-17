---
area: pages-and-routes
last_updated: 2026-05-17
---

# Pages and routes

## What it does

The site is a single route — `/` — composed of one long-form scroll page split into ten conversion-funnel sections plus a sticky nav and footer. There are no dynamic routes, no `[slug]` segments, and no `/api/*` handlers. All navigation is internal anchors.

## Components

The page (`src/app/page.tsx`) is organised top-to-bottom as a marketing funnel:

| # | Section | DOM anchor | Purpose |
|---|---|---|---|
| — | Sticky nav | (fixed top) | Brand wordmark, anchor links, primary "Get Started" CTA |
| 1 | Hero | (full-screen) | Headline "Stop burning out. Start growing." + subhead + dual CTA + trust bar (local, Grok+Claude, zero API cost) |
| 2 | Problem | `#pain` | Six pain-point cards: time cost, algo punishment, reply load, generic AI output, SMM cost, burnout stats |
| 3 | Solution | _(unanchored)_ | "Meet SocialForge" framing + 4-stat bar (10h+ saved, 24/7, char-perfect, EUR 0/mo) |
| 4 | Features | `#features` | Six feature cards: Grok feed intel, Claude Code CLI writing, voice learning, autonomous reply agent, content calendar, real-time system access |
| 5 | How it works | `#how-it-works` | Three numbered steps: install + log in to X / set voice & strategy / let the agent run, plus mid-page CTA |
| 6 | Comparison | _(unanchored)_ | Table vs. Buffer/Hootsuite-style scheduling tools across 7 criteria |
| 7 | Pricing | `#pricing` | Single tier: `EUR 30` lifetime, anchored against `$15-249/month`, 7 included items, CTA to `#download` |
| 8 | Guarantee | _(unanchored)_ | 30-day money-back |
| 9 | FAQ | `#faq` | Five questions: one-time payment, Grok-no-API, Claude Code add-on, account safety, updates |
| 10 | Final CTA | `#download` | Closing pitch + repeat purchase CTA |
| — | Footer | (bottom) | Tagline + duplicate anchor nav |

## Entry points / interfaces

- `/` — `src/app/page.tsx` (React Server Component, no `"use client"`).
- Anchor targets used in CTAs: `#features`, `#how-it-works`, `#pricing`, `#faq`, `#pain`, `#download`.
- External purchase link: **not yet wired**. The primary purchase CTAs point to `#download`; the final CTA inside `#download` itself points to `#` (placeholder).

## Dependencies

- Inline SVG icons (Heroicons-style path data) — no icon library installed.
- `next/font/google` (Geist + Geist Mono) wired in `layout.tsx`, consumed via `--font-geist-sans` / `--font-geist-mono` CSS variables.
- Tailwind utility classes + the project's custom utilities defined in `globals.css` (`.gradient-text`, `.glow`, `.card-hover`, `.noise-overlay`, `.section-divider`).

## Known gaps / accepted debt

- No 404, no `loading.tsx`, no `error.tsx` — Next.js defaults are in effect.
- All copy lives inline in the page component as JS arrays — fine for one page, but a CMS-style extraction (or even a `content/` folder of JSON/MDX) will be required as soon as the marketing team wants to iterate on copy without touching code.
- No real link target for the "Get SocialForge Now" / "Download" CTAs.
