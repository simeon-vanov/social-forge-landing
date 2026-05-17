---
area: social-forge-app-integration
last_updated: 2026-05-17
---

# SocialForge app integration

## What it does

`social-forge-landing` is the front door of the SocialForge product. The product itself lives in the sibling repo `../social-forge-app/` — a Windows desktop agent that drives X.com via a logged-in browser session, triages the feed with Grok, generates posts/replies (optionally via Claude Code over MCP), and runs autonomously on a schedule. The landing repo owns the marketing surface for that product and **does not contain any product logic** — no MCP server, no Playwright runners, no automation engine.

## Components

- The landing page itself (`src/app/page.tsx`) — describes the product features, pricing, FAQ.
- `CLAUDE.md` (repo root) — declares the documentation source of truth: `../social-forge-app/Docs/` (software requirements, software design document, risk register). Brand messaging and feature claims must reconcile with those documents.
- This `docs/` tree — the landing repo's own AI-management surface (specs, plans, reference docs for the marketing site itself). It does NOT replace `../social-forge-app/Docs/`; it lives alongside it.

## Entry points / interfaces

- **Inbound**: visitors land at `/` (production domain TBD).
- **Outbound to product**: download / purchase CTAs (`#download` and `href="#"` in the final CTA) — **not yet wired** to a real download or checkout URL. Once the product ships, these point to:
  - The Windows installer (download endpoint hosted alongside the product), and/or
  - A one-time payment checkout (Stripe Payment Link, Lemon Squeezy, Polar — provider not yet chosen) that triggers the installer link on success.
- **Sibling repos consulted (read-only)**:
  - `../social-forge-app/Docs/` — for verifying feature claims, pricing positioning, brand voice.
  - `../social-forge-app/` source — only when validating that a feature highlighted on the landing actually exists in the product.

## Dependencies

- **Brand alignment**: anything stated on the landing about Grok integration, Claude Code MCP, anti-detection, voice learning, content calendar, or pricing must match the product's `Docs/`. Drift between this site and product docs is treated as a bug.
- **Product domain knowledge**: SocialForge is the rebrand of an earlier "SocialAgent" name; commit `3027d7f` did the rename across docs and code. Future references must always use SocialForge.

## Known gaps / accepted debt

- Purchase + download CTAs are placeholders. Picking and integrating a payment provider is the next product-coupled change.
- There is no shared design system between `social-forge-landing` and `social-forge-app` yet — the desktop UI and the marketing site share a dark-violet aesthetic by convention only.
- Versioning of feature claims vs. product reality is informal; there is no automated check that the landing's feature list still matches `../social-forge-app/Docs/`.
