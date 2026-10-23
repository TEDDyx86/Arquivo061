# Sobre o Arquivo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an independent ARQUIVO061 story page at `/sobre-o-arquivo` and link the manifesto CTA to it.

**Architecture:** Use a small pathname switch in the existing React entry component instead of introducing a router dependency. Render a dedicated editorial page outside `CartProvider`; preserve the store at `/`. Copy the supplied portrait into public assets and use a standalone story component with scoped responsive styling.

**Tech Stack:** React 19, TypeScript, Vite, Vitest, React Testing Library, CSS.

## Global Constraints

- Story route is `/sobre-o-arquivo`.
- Preserve supplied Portuguese story copy without adding historical claims.
- Use the user's `GOG.jpg` as a local public asset and provide descriptive alt text.
- Keep the story destination separate from the storefront and its cart provider.
- Do not add routing or other dependencies.

---

## File Map

- `src/App.test.tsx` — verify route separation and manifesto story link.
- `src/App.tsx` — select storefront versus standalone story based on pathname; update CTA target.
- `src/components/OriginStoryPage.tsx` — story content and page structure.
- `src/styles.css` — responsive editorial page styles matching existing ARQUIVO061 tokens.
- `public/assets/brand/gog.jpg` — locally served copy of the user-supplied portrait.

### Task 1: Add route separation and story page

**Interfaces:** `OriginStoryPage` is a no-prop page component; `App` renders it for pathname `/sobre-o-arquivo` and otherwise renders the existing cart-wrapped storefront.

- [x] Add tests that assert the manifesto CTA points to `/sobre-o-arquivo`, that the story route renders its supplied title/copy/GOG portrait and a return-to-store link, and that the store remains the default route.
- [x] Run focused tests and confirm failure before implementation.
- [x] Copy `GOG.jpg` to `public/assets/brand/gog.jpg`.
- [x] Implement `OriginStoryPage` with the exact user-provided copy, semantic headings, portrait alt text, and link back to `/`.
- [x] Add pathname selection in `App`; keep `CartProvider` only around `Storefront`; update the manifesto CTA to `/sobre-o-arquivo`.
- [x] Style a standalone editorial composition using existing ARQUIVO061 colors and type, stacking image/content cleanly on mobile.
- [x] Run focused tests, full test suite, and production build.
- [x] Verify direct route loading, CTA navigation, image availability, and responsive layout at desktop and mobile widths.

## Self-review

The plan covers all acceptance criteria in the approved design spec: dedicated route, direct load/refresh, exact copy, local GOG portrait, return navigation, responsive layout, and isolation from cart behavior. No new dependency is needed.
