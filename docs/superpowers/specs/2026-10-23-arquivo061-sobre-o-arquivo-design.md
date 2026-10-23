# ARQUIVO061 — Sobre o Arquivo

## Goal

Create a standalone editorial page at `/sobre-o-arquivo`, reachable from the manifesto's existing “Conheça as peças” button, that tells the ARQUIVO061 origin story using the copy supplied by the user and the local GOG portrait.

## User experience

- The storefront remains its own page and retains its current shopping flow.
- The manifesto button navigates to `/sobre-o-arquivo`.
- The destination is a visually independent editorial page within the same platform, with a clear way back to the storefront.
- The page presents the supplied “COMO TUDO COMEÇOU” copy, followed by the section “O PIONEIRO — A VOZ: GOG — O PIONEIRO DE RAP DO DF”. Preserve the supplied Portuguese text and punctuation; do not invent additional historical claims.
- Use the supplied `GOG.jpg` as the image accompanying the GOG section, with descriptive alt text.

## Design direction

Use an editorial archive treatment consistent with ARQUIVO061: ink/paper contrast, bold condensed display typography, restrained lime or wine accents, documentary image presentation, and responsive spacing. This page should have its own composition rather than embedding the story into the storefront. On small screens, text and portrait stack without horizontal overflow.

## Technical approach

Implement the route using the existing React/Vite application patterns without adding a routing dependency unless the current app already provides one. Ensure direct navigation or refresh at `/sobre-o-arquivo` renders the story page. Keep cart/storefront behavior isolated from the story destination. Place or reference the user-provided image from the project's public assets.

## Acceptance criteria

1. The “Conheça as peças” manifesto button opens `/sobre-o-arquivo`.
2. The route can be loaded directly and refreshed successfully.
3. All supplied story copy is present and legible, including the GOG section.
4. The GOG portrait loads locally and has useful alt text.
5. The page provides navigation back to the storefront.
6. Desktop and mobile layouts are usable with no horizontal overflow.
7. Existing storefront shopping behavior and tests remain intact; tests and production build pass.

## Out of scope

- Reproducing the unavailable Canva page pixel-for-pixel.
- Adding or changing e-commerce, cart, or Spotify behavior.
- Adding external image dependencies or unsupported biographical details.
