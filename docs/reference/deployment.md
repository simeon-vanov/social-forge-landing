---
area: deployment
last_updated: 2026-05-17
---

# Deployment

## What it does

The site is packaged as a self-contained Docker image built from a three-stage `node:22-alpine` Dockerfile and run as a Next.js `standalone` server on port 3000. The image is intended to live behind a reverse proxy (nginx) on the shared VPS, alongside the other `C:\Projects` web properties — not on Vercel, despite the `CLAUDE.md` mentioning Vercel as historical context.

## Components

- `Dockerfile` — multi-stage build:
  1. `deps` — `npm ci` against `package.json` + `package-lock.json` (with `libc6-compat` for any glibc-linked native deps).
  2. `builder` — copies `node_modules` from `deps`, copies the source, runs `npm run build`. With `output: "standalone"` in `next.config.ts`, this produces `.next/standalone/` (server + minimal `node_modules`) and `.next/static/`.
  3. `runner` — final image: `NODE_ENV=production`, telemetry disabled, non-root `nextjs:nodejs` user (uid/gid 1001), copies `public/`, `.next/standalone/`, and `.next/static/` into place. `CMD ["node", "server.js"]` on `PORT=3000`, `HOSTNAME=0.0.0.0`.
- `next.config.ts` — sole config knob is `output: "standalone"`, which is what makes the multi-stage runner stage minimal.
- `.github/workflows/` — CI workflow exists (referenced in commit `f9a14ed`); confirms the build but image push / deploy steps depend on the repo's GitHub Actions configuration (not re-validated in this migration).
- `eslint.config.mjs` + `postcss.config.mjs` — applied at build time inside `builder`; lint is run via `npm run lint`, not as part of `npm run build`.

## Entry points / interfaces

- **Build**: `npm run build` (locally) or `docker build .` (CI / VPS).
- **Run (local dev)**: `npm run dev` on port 3000.
- **Run (container)**: `docker run -p 3000:3000 <image>` — serves the landing on port 3000.
- **Production HTTP entry**: a reverse-proxied hostname (TBD — likely `socialforge.<domain>` or similar). Routing config lives outside this repo on the shared VPS.

## Dependencies

- Docker / a Docker-capable host (`node:22-alpine` base).
- A reverse proxy (nginx) for TLS termination and hostname routing on the VPS.
- DNS pointing the chosen marketing hostname at the VPS.
- No database, no Redis, no external services at runtime.

## Known gaps / accepted debt

- The CI workflow exists but its exact image-push / VPS-deploy steps are not documented here yet — when the first deploy ships, add the registry + target hostname to this file.
- `CLAUDE.md` still says "Deployment: Vercel (planned)" — historical, predates the Dockerfile. Treat the Dockerfile as the source of truth; consider rewriting that line in `CLAUDE.md` when the marketing hostname is finalised.
- No healthcheck in the Dockerfile (e.g., `HEALTHCHECK CMD wget -qO- http://127.0.0.1:3000/ || exit 1`). Acceptable for a static-feeling marketing page but trivial to add.
