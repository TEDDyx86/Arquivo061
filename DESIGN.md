---
name: ARQUIVO061
description: Streetwear from Ceilândia, presented as an open archive.
colors:
  ink: "#191719"
  paper: "#f2f0ed"
  paper-deep: "#e8e5df"
  acid-lime: "#d3df16"
  archive-wine: "#681726"
  field-olive: "#555e4c"
  muted-ink: "#5d5a56"
  hairline: "rgba(25, 23, 25, 0.22)"
typography:
  display:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "clamp(3.4rem, 7.1vw, 7.6rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Antonio, Arial Narrow, sans-serif"
    fontSize: "17px"
    fontWeight: 300
    lineHeight: 1.3
  label:
    fontFamily: "Antonio, Arial Narrow, sans-serif"
    fontSize: "10px"
    fontWeight: 600
    letterSpacing: "0.12em"
rounded:
  circle: "50%"
spacing:
  control: "5px"
  inline: "12px"
  group: "22px"
  section: "clamp(62px, 8vw, 116px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "0"
    padding: "0 12px"
    height: "37px"
  button-primary-hover:
    backgroundColor: "{colors.acid-lime}"
    textColor: "{colors.ink}"
  size-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "0"
    height: "34px"
---

# Design System: ARQUIVO061

## Overview

**Creative North Star: “The Open Street Archive”**

ARQUIVO061 treats clothing as evidence with another life ahead of it. Its visual world joins the directness of a streetwear label with the indexing language of a working archive: garment photographs, file marks, geographic references, numbered records, and confident display type. The result should feel local, tactile, and immediately usable—not like a generic marketplace or a detached editorial lookbook.

Use the ghost and wordmark as identity assets, not as substitute product imagery. Keep the actual garments legible and central; archive devices support their story and the shopping task. Commercial details are demonstration data until the brand owner confirms them.

**Key Characteristics:**
- Dark ink and warm paper create the base; lime is a sharp locator, with wine and olive carrying the garment and territory references.
- Anton display type is compressed, uppercase, and emphatic; Antonio keeps supporting copy and labels compact and readable.
- Fine rules, square controls, and stamped circular marks make a consistent archive vocabulary.
- Product imagery and accessible shopping controls remain functional content, not decoration.

## Colors

The palette moves between near-black ink and warm paper, punctuated by a small, high-visibility lime accent and restrained wine/olive tones.

### Primary
- **Archive Ink**: the dark frame for navigation, footer, and primary actions; use paper text on top.
- **Signal Lime**: the small high-contrast marker for the cart count, geographic ticker, and selected archival accents. Keep it selective.

### Secondary
- **Archive Wine**: an expressive emphasis for display copy and selected garment references; do not use it for small text on dark backgrounds.
- **Field Olive**: a contextual surface and label color connecting the visual system to the DF imagery.

### Neutral
- **Warm Paper**: the principal reading canvas and text on dark surfaces.
- **Paper Shadow**: a secondary neutral surface for the catalogue and tonal separation.
- **Muted Ink**: supporting text on paper; preserve its contrast against the warm paper background.
- **Hairline**: subtle dividers and outlines; not a replacement for visible keyboard focus.

**The Signal Rule.** Lime is a locator, not a fill color for whole sections; reserve it for small signals and deliberate calls to attention.

## Typography

**Display Font:** Anton (with Impact, sans-serif fallback)  
**Body Font:** Antonio (with Arial Narrow, sans-serif fallback)  
**Label Font:** Antonio, semibold, uppercase with expanded tracking.

**Character:** Anton gives headlines the condensed, poster-like force of street graphics. Antonio carries compact labels and readable supporting copy without making the archive feel corporate.

### Hierarchy
- **Display** (400, responsive clamp from 3.4rem to 7.6rem, 0.96 line-height): opening statement and collection title.
- **Headline** (400, typically 3.5rem–6.6rem, tight line-height): manifesto and major section statements.
- **Title** (400, roughly 1.6rem–2.6rem): product and drawer headings.
- **Body** (300, 15–19px, about 1.3 line-height): descriptive and manifesto copy.
- **Label** (600, 9–11px, expanded tracking, uppercase): archive references, category labels, and small metadata.

**The Poster Rule.** Reserve Anton for short, decisive statements; keep product descriptions, prices, and controls in Antonio.

## Layout

The wide layout uses a generous editorial opening beside an actual garment photograph, followed by a two-column catalogue whose staggered rhythm avoids a uniform marketplace grid. The manifesto pairs a Ceilândia photograph with its text. Content is held within broad responsive side gutters rather than a fixed narrow container.

At widths up to 900px, the opening tightens and purchase controls reflow. At 640px and below, navigation becomes a toggleable menu, the opening and manifesto stack vertically, and the product catalogue becomes one column. Maintain a minimum viewport width of 320px; do not let the heading or header controls create horizontal scrolling.

Use generous section separation, compact label/control groupings, and a little more space above headings than below them. Keep the purchase action beside the size choices at phone widths.

## Elevation & Depth

The default system is flat: depth comes from ink/paper/olive tonal contrast, hairline rules, image framing, and overlap. The cart drawer is the exception; a soft offset shadow separates it from its scrim. Do not use zero-offset colored glows as a substitute for state or hierarchy.

## Shapes

Most geometry is square and archive-like: controls and image frames use crisp corners, thin strokes, and inset rectangular borders. Circular silhouettes are reserved for the lime count, seal, and small collection index. Focus uses a visible lime outline with offset; never hide the browser focus indication.

## Components

### Buttons
- **Shape:** square corners; primary catalogue action is a compact, bordered block.
- **Primary:** ink background, paper text, short label, and a plus icon; lime background and ink text on hover.
- **Hover / Focus:** color shift on hover; a clearly visible lime focus outline with offset for keyboard users.
- **Secondary:** transparent outlined navigation and icon controls, with a lime hover surface where appropriate.

### Chips
- **Style:** size choices are compact square buttons with a fine hairline border and transparent paper background.
- **State:** selected and hovered choices invert to ink background and paper text. The selected state is exposed with `aria-pressed`.

### Cards / Containers
- **Product records:** no enclosing rounded card. The garment photo is the dominant field; index, category, name, price, sizes, and add action remain grouped as a clear product record.
- **Cart lines:** small square garment thumbnail beside name, variant, size, quantity controls, and line amount; divider separates records.

### Navigation
- **Desktop:** dark ink bar, white wordmark, restrained text links, and a bordered cart trigger. Links shift to lime on hover.
- **Mobile:** compact wordmark with menu and cart icon actions; the menu expands as a dark stacked panel. Keep the cart trigger visible.

### Cart Drawer
- A right-side paper panel over a dark translucent scrim, with a clear close action, empty state, line editing, subtotal, and an explicit notice that checkout is inactive. Escape closes the panel, focus enters it, and focus returns to the opener.

### Product Size Selection
- Require a size before adding; announce the validation message. Adding a valid selection gives a visible success status. Keep product ID and size as separate cart line identity.

## Do's and Don'ts

### Do:
- **Do** preserve the supplied ARQUIVO061 wordmark, ghost, garment photos, and Ceilândia reference image.
- **Do** keep all user-facing shopping labels in Portuguese and retain the PP, P, M, G, GG choices.
- **Do** identify demonstration prices and availability clearly until verified by the brand owner.
- **Do** preserve visible focus, semantic buttons, labels, and the cart's accessible dialog behavior.
- **Do** make the garment photograph and its distinct construction the visual center of each product record.

### Don't:
- **Don't** present sample price, stock, shipping, or payment status as a verified offer.
- **Don't** imply that the cart submits an order or accepts payment.
- **Don't** replace the compressed display/body type pairing with a generic geometric sans-serif system.
- **Don't** make archive marks compete with the garment or with the actual add-to-cart action.
