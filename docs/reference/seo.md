---
area: seo
last_updated: 2026-05-17
---

# SEO and metadata

## What it does

Search-engine and social-share metadata is configured in one place — the `metadata` export of `src/app/layout.tsx` — and covers title + description only. There is no `robots.txt`, no `sitemap.xml`, no OpenGraph image, and no per-section metadata. The landing relies on Next.js's default `<head>` behaviour and the page's semantic structure (one H1, descriptive H2s per section) for crawlability.

## Components

- `src/app/layout.tsx` — exports:
  - `metadata.title`: `"SocialForge — Your AI Social Media Growth Engine"`
  - `metadata.description`: `"Stop burning out on social media. SocialForge is an AI-powered desktop agent that creates on-brand posts, replies to your feed, and grows your audience — all on autopilot."`
- `src/app/favicon.ico` — actually placed in `src/app/`, picked up by Next.js's app-router convention.
- `public/logo.png` — brand logo asset (Canva-generated per commit `093cd6d`).
- `src/app/page.tsx` — uses one H1 (`Stop burning out. Start growing.`) and section-level H2s for crawl structure.

## Entry points / interfaces

- `<title>` and `<meta name="description">` rendered automatically by Next.js from the `metadata` export.
- Favicon served from `src/app/favicon.ico` via the App Router convention. There is also a `src/app/favicon-64.png` and `src/app/icon.png` present in the app folder — Next.js's icon convention picks these up automatically as additional icon link tags.
- `public/logo.png` is available at `/logo.png` for any future OG image / share preview.

## Dependencies

- `next/font/google` (Geist + Geist Mono) — these inject font preconnect tags into `<head>` automatically.
- No analytics integration (`gtag`, Plausible, Fathom, Umami) is wired in.

## Known gaps / accepted debt

- No OpenGraph or Twitter Card metadata. Adding `openGraph` and `twitter` fields to the `metadata` export, plus an `og-image.png` in `public/`, would meaningfully improve link previews on X (the primary referrer for this product's audience).
- No `robots.txt` or `sitemap.xml`. For a single-route site this is low impact, but generating both via `src/app/robots.ts` and `src/app/sitemap.ts` is a 5-minute task once the production hostname is decided.
- No canonical URL is set; once the production domain is chosen, add `metadata.metadataBase` and `alternates.canonical`.
- No structured data (`Product` / `Offer` JSON-LD) for the `EUR 30` lifetime pricing — adding this would help with rich-result eligibility for the pricing section.
