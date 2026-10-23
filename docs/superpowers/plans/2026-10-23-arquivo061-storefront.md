# ARQUIVO061 Storefront Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive ARQUIVO061 storefront with a four-item demo catalogue, size selection, and a persistent cart summary without payment or order submission.

**Architecture:** React/Vite client app. Product data is separated from components. Cart behavior is a small tested module persisted to local storage; page components consume it through a React provider. Public-facing catalogue images are copied into the app's public assets from the provided source folder.

**Tech Stack:** React, Vite, TypeScript, Vitest, React Testing Library, jsdom.

## Global Constraints

- Use the four demo listings and prices in `docs/superpowers/specs/2026-10-23-arquivo061-store-design.md`; mark them as sample data.
- Size options are PP, P, M, G, GG.
- Cart entries are keyed by product and size, persist in local storage, and malformed stored data falls back to an empty cart.
- No checkout, payment, shipping calculation, account, order persistence, or order submission.
- Use supplied product/brand assets and preserve the ghost logo; do not fabricate impact metrics or testimonials.
- Support mobile and desktop layouts with semantic, keyboard-accessible controls.

---

## File map

- `package.json`, `vite.config.ts`, `tsconfig*.json`, `index.html`: Vite/TypeScript project configuration.
- `src/data/products.ts`: typed demo catalogue and size options.
- `src/cart/cart.ts`: pure cart operations, totals, and storage parsing.
- `src/cart/CartProvider.tsx`: React state and local-storage lifecycle.
- `src/cart/cart.test.ts`: isolated tests for cart rules and persistence parsing.
- `src/components/*`: header, product card/grid, cart drawer, and brand sections.
- `src/App.tsx`, `src/main.tsx`, `src/styles.css`: composition, app bootstrap, responsive visual system.
- `src/App.test.tsx`: key user flow tests using real components and the cart provider.
- `public/assets/products/*`, `public/assets/brand/*`: local copies/optimized renditions of supplied assets and selected logo.

## Task 1: Scaffold app and prove cart rules with tests

**Files:** create the Vite/React/TypeScript app config, `src/cart/cart.test.ts`, and `src/cart/cart.ts`.

- [ ] Scaffold React + TypeScript using Vite; add Vitest, jsdom, and React Testing Library dependencies.
- [ ] Write tests for size-specific cart entries, increment/decrement, removal, subtotal, and invalid local-storage data.
- [ ] Run `npm test -- --run`; confirm the tests fail because the cart module is not implemented.
- [ ] Implement `CartItem`, `addItem`, `setItemQuantity`, `removeItem`, `getSubtotal`, and `parseStoredCart` as pure functions.
- [ ] Re-run `npm test -- --run`; all cart tests pass.

## Task 2: Add products and cart state integration

**Files:** create `src/data/products.ts`, `src/cart/CartProvider.tsx`, and provider tests in `src/cart/CartProvider.test.tsx`.

- [ ] Define four typed products with IDs, demo names/prices, source photo mapping, sample sizes PP–GG, and clearly non-real stock state.
- [ ] Test provider restoration from local storage, persistence after updates, and recovery when storage contains invalid JSON.
- [ ] Run provider tests and observe the expected failure before implementation.
- [ ] Implement provider state backed by the pure cart module; avoid persisting product objects/prices when an item ID + size + quantity is sufficient.
- [ ] Re-run `npm test -- --run`; pure and provider tests pass.

## Task 3: Build storefront and cart interaction

**Files:** create `src/App.tsx`, `src/main.tsx`, `src/components/SiteHeader.tsx`, `ProductCard.tsx`, `ProductGrid.tsx`, `CartDrawer.tsx`, and `src/App.test.tsx`.

- [ ] Write user-flow tests for required size selection, adding a selected item, opening the cart, changing quantity, removing a line, and the checkout-unavailable notice.
- [ ] Run the targeted tests; confirm they fail due to absent UI behavior.
- [ ] Build the header, opening section, catalogue, brand/territory section, footer, and accessible cart drawer using the app's product data and provider.
- [ ] Ensure product+size are separate cart lines, subtotal is visible, empty state is actionable, and controls work by keyboard.
- [ ] Re-run the UI tests; all tested flows pass.

## Task 4: Apply identity, responsive layout, and local assets

**Files:** create/update `src/styles.css`; add files under `public/assets/`; update `src/data/products.ts` only for the asset paths.

- [ ] Copy the four supplied `Roupas/` images into public product assets; copy the approved local logo/mascot asset into the brand assets after inspecting the scraped candidates.
- [ ] Build the black/off-white foundation, lime accent, restrained burgundy/olive details, condensed display hierarchy, and strong product image presentation from the approved direction.
- [ ] Style the product grid and cart drawer responsively; provide visible focus, disabled, selected-size, and empty-cart states.
- [ ] Run `npm test -- --run` and `npm run build`; both pass.
- [ ] Inspect at desktop and mobile widths; fix overflow, unreadable copy, or inaccessible controls, then re-run tests and build.

## Plan self-review

- Spec coverage: brand hero/catalogue/story/footer/cart are Task 3; sizes/demo data/persistence/invalid storage are Tasks 1–2; identity/assets/responsiveness/accessibility are Task 4; checkout exclusion is in Tasks 3 and global constraints.
- Placeholder scan: no TBD/TODO steps; each task has concrete files and commands.
- Type consistency: cart pure functions own cart data rules; provider exposes that model; components consume the provider and typed products.
