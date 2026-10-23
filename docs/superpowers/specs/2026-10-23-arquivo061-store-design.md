# ARQUIVO061 Online Store — Design Specification

## Goal

Build a responsive online storefront for ARQUIVO061 that presents its streetwear identity and lets visitors browse a product catalogue, choose sizes and quantities, and review a cart. This first release does not take payment or submit orders.

## Brand and content evidence

- Brand name: ARQUIVO061; local identity assets are in `1.png`–`4.png`.
- Product images are in `Roupas/` and should be used as real catalogue imagery.
- The initial catalogue uses fictional, editable names/prices mapped to the supplied garment photos: `IMG_1587.PNG` → Moletom Bloco 061 (quarter-zip color-block), R$ 289; `IMG_2745.JPG.jpeg` → Camiseta Arquivo Fantasma, R$ 119; `IMG_3473.JPG.jpeg` → Moletom Remendo Shark — Vinho (patchwork), R$ 329; `IMG_3475.JPG.jpeg` → Moletom Remendo Shark — Cru (patchwork), R$ 329.
- Use the sample size grid PP, P, M, G, GG for each initial product. These are demo listings and do not assert real stock.
- Brand themes evidenced by the materials: streetwear, upcycling/reuse, the Federal District, and local belonging.
- Reference copy: “O que a indústria descarta, a rua transforma em história.”
- Visual cues: ghost mascot, condensed display typography, black/off-white foundation, lime green accents, and burgundy/olive tones drawn from the garments.
- The Canva page's accessible content references Ceilândia, “Código 061”, and coordinates `-15.817222, -48.105278`. Do not present extra factual claims unless validated by the owner.

## User and key journey

Primary user: a visitor interested in distinctive streetwear, viewing the store on desktop or mobile. The target audience is inferred from the materials and can be refined later.

1. Understand the brand's DF/upcycling identity from the opening view.
2. Browse the products and inspect their images, names, prices, and available sizes.
3. Select a size and quantity, then add the item to the cart.
4. Open the cart, adjust quantities or remove items, and review the subtotal.

## Surface direction

Recommended direction: **editorial-commerce hybrid**. The opening section should communicate the brand's territory and reuse story, while the catalogue and cart remain direct and usable. Avoid a generic marketplace template that weakens the brand identity, and avoid an editorial-only page that hides how to shop.

### Page structure

1. Compact header with ARQUIVO061 logo, in-page navigation, and cart control with item count.
2. High-impact brand opening with the supplied identity, concise copy, and a clear “Explorar coleção” action.
3. Product catalogue with product image, name, demonstration price, size selection, quantity/add action, and clear availability state.
4. Short brand/territory section connecting the collection to Ceilândia/DF and upcycling, using only supplied, supportable claims.
5. Footer with brand identity and basic navigation.
6. Cart drawer or equivalent responsive panel showing selected products, size, quantity controls, remove action, subtotal, and a clear notice that checkout/payment is not available yet.

### Visual system

- Use black and off-white as the core surfaces; lime green as a deliberate identity accent, with burgundy and olive used selectively to echo the garments.
- Use a bold condensed display face and a highly legible supporting face; preserve the provided logo/mascot rather than redrawing it.
- Let the real product imagery carry the visual weight. Avoid generic apparel stock imagery, unsupported “sustainable impact” numbers, and invented testimonials.
- Build responsive layouts for narrow mobile and desktop, with accessible focus states, semantic controls, and readable contrast.

## Functional requirements

- Catalogue is data-driven and easy to update in one place.
- Use the four fictional demo listings and prices above, with sizes PP, P, M, G, GG. Keep all names, prices, sizes, and stock states editable in one catalogue data source; mark demo commercial values as sample content and replace/confirm them before treating the store as live.
- Adding a product requires a selected size. Quantity is a positive integer; cart entries are distinguished by product and size.
- Cart supports quantity changes and removal, computes subtotal correctly, displays empty state, and updates header count.
- Persist the cart in browser local storage; validate stored data on load and recover safely to an empty cart if data is malformed.
- No checkout/payment provider, customer account, order database, shipping calculator, or order submission is part of this scope. Do not imply that an order has been placed.

## Technical approach

Use React with Vite as the delegated stack for this client-side storefront. Keep catalogue data separate from UI; keep cart calculations and persistence in a small, testable cart module/state layer. No server is required for the agreed scope. Preserve original source imagery; create optimized copies only as needed for performance.

For the requested brand-page scrape, use the publicly readable page as a reference and inspect any candidate remote media before bringing it into the project. Prefer the supplied local logo/brand assets when they provide a suitable version. Do not hotlink remote Canva files in the shipped page.

## Verification

- Verify responsive layout at desktop and mobile widths.
- Verify size-required add behavior; adding/removing products; quantities; subtotal; duplicate product with different sizes; empty cart; local-storage persistence; and malformed-storage recovery.
- Confirm all product images load and the cart explicitly states that payment/order submission is not available.
- Run the project build and available tests/lint checks.

## Open decisions

- Real product names, descriptions, prices, size grids, and stock.
- Which supplied or scraped logo variant is the approved primary web logo.
- Final sales/payment provider, shipping rules, and production order workflow (future phase).
- Brand contact/social links and any final copy that has not yet been supplied.
