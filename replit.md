# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### WRHWFOUR Landing Page (`artifacts/wrhwfour-landing/`)
- **Type**: React + Vite frontend-only (no backend)
- **Preview Path**: `/`
- **Brand Colors**: Steel gray (#3D4E5C) and copper/burnt orange (#C8743A)
- **Sections**: Hero, Services, About/Stats, Why Choose Us, Testimonials, Coverage, Contact, Footer
- **Features**: Framer Motion animations, WhatsApp floating button, responsive design, SEO meta tags
- **Assets**: Logo files from `attached_assets/` via `@assets` Vite alias

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
