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
- **Type**: React + Vite frontend-only (no backend), wouter routing
- **Preview Path**: `/`
- **Brand Colors**: Deep navy (#0B1520) and copper/burnt orange primary
- **Home Page Sections**: Hero, Services, About/Stats, Why Choose Us, Testimonials, Coverage, Contact, Footer
- **Features**: Framer Motion animations, WhatsApp floating button, responsive design, SEO meta tags
- **Assets**: Logo files from `attached_assets/` via `@assets` Vite alias
- **Shared Components**: `Navbar.tsx` (home, scroll+link hybrid), `PageNavbar.tsx` (inner pages), `PageLayout.tsx` (inner page wrapper), `Footer.tsx` (with legal links)

#### Pages & Routes
| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Full landing page with all sections |
| `/about` | AboutPage | Company history, mission, values, team |
| `/why-choose-us` | WhyChooseUsPage | 6 pillars, differentiators, comparison table |
| `/coverage` | CoveragePage | 4 regional zones, SLA table, delivery model |
| `/contact` | ContactPage | Contact form, office details, FAQ |
| `/privacy-policy` | PrivacyPolicyPage | Full GDPR-aligned privacy policy |
| `/terms-conditions` | TermsConditionsPage | B2B terms covering payment, delivery, IP |
| `/refund-policy` | RefundPolicyPage | Hardware, installation & AMC refund rules |
| `/service-policy` | ServicePolicyPage | Service delivery standards & SLAs |
| `/disclaimer` | DisclaimerPage | Website & content disclaimer |

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
