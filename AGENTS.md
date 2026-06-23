<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project conventions

## Design system

All pages must match the **homepage** visual language (forest + lime, paper surfaces, Outfit/DM Sans). See `.cursor/rules/global-design-system.mdc` for full requirements.

**Source of truth**

| Layer | Location |
|-------|----------|
| CSS tokens | `src/app/globals.css` |
| Section primitives | `src/components/ui/scroll-section.tsx` |
| Cards | `src/components/ui/bento-card.tsx` |
| Buttons | `src/components/ui/button.tsx`, `link-button.tsx` |
| Animations | `src/components/client/reveal.tsx` |
| Homepage patterns | `src/components/sections/home/` |

## Content pages

- Ongo factual content → `src/lib/constants/*-content.ts`
- Brand: `siteConfig` from `src/config/site.ts`
- Preserve legal/medical meaning; improve layout and hierarchy only

## Stack

Next.js App Router · Tailwind CSS v4 · shadcn-style UI in `src/components/ui` · Framer Motion (via `Reveal`) · Lucide React

## Routes (legal & info)

`/about` · `/privacy` · `/terms` · `/medical-disclaimer` · `/hipaa` · `/accessibility` · `/contact` · `/alabama`
