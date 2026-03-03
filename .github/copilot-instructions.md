# SocialAgent Landing Page — Copilot Instructions

## Context
This is the **social-agent-landing** repository — the marketing landing page for SocialAgent, an AI-powered X (Twitter) automation agent for @simo_vanov / DecodeTheTrade.

## Linear Integration
- All work tracked in the **X.SocialAgent** Linear project.
- Reference Linear issue IDs in commit messages.
- Check Linear project documents for feature descriptions and brand context.

## Tech Stack
- Next.js 15 (App Router), TypeScript, Tailwind CSS v4, npm

## Design Direction
- Dark theme, professional but approachable
- Brand: DecodeTheTrade / @simo_vanov — algorithmic Forex trading
- Highlight: AI feed monitoring, zero-cost Grok integration, content calendar, desktop companion app
- Anti-hype tone, data-driven messaging

## Coding Standards
- TypeScript strict mode
- Functional components, React hooks
- Tailwind utility classes preferred over custom CSS
- `@/*` import alias for src directory
- Server components by default, `"use client"` only when needed
- PascalCase for components, camelCase for utilities

## Commit Rules
- One commit per work item, descriptive message, reference Linear issue ID
- Do not push unless explicitly asked
