# Spotify Playlist Embed Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the supplied ARQUIVO061 Spotify playlist as a responsive, accessible embed between the product catalogue and manifesto.

**Architecture:** Create a focused `PlaylistSection` component containing Spotify's playlist iframe and an ordinary external fallback link. Insert it into the existing page flow and style it with the storefront's current palette and responsive layout; do not add Spotify API access, credentials, autoplay, or dependencies.

**Tech Stack:** React, TypeScript, Vite, Vitest, React Testing Library, CSS.

## Global Constraints

- Use playlist ID `5pbJ42jJ9g4GOxWt5VWNxF`.
- Use the official Spotify iframe embed; no backend or Spotify API credentials.
- Do not autoplay.
- Insert the dedicated â€œTrilha do arquivoâ€ section between the catalogue and manifesto.
- Keep the section responsive and provide a direct Spotify link if the embed is unavailable.

---

## File Map

- `src/components/PlaylistSection.tsx` â€” playlist heading, lazy iframe, and external fallback link.
- `src/components/PlaylistSection.test.tsx` â€” playlist ID, iframe semantics, lazy loading, and fallback link tests.
- `src/App.tsx` â€” insert the section between collection and manifesto.
- `src/styles.css` â€” desktop two-column composition and narrow-screen stacked layout, using existing tokens.

### Task 1: Build and integrate the playlist section

**Files:**
- Create: `src/components/PlaylistSection.tsx`
- Create: `src/components/PlaylistSection.test.tsx`
- Modify: `src/App.tsx`
- Modify: `src/styles.css`

**Interfaces:**
- Produces `PlaylistSection`, a no-prop React component used by `App.tsx`.
- Uses embed URL `https://open.spotify.com/embed/playlist/5pbJ42jJ9g4GOxWt5VWNxF?utm_source=generator&theme=0`.
- Uses external fallback URL `https://open.spotify.com/playlist/5pbJ42jJ9g4GOxWt5VWNxF?si=VQbk2HszRtGIAfePhJf1yA`.

- [x] **Step 1: Write failing component tests**

Create `src/components/PlaylistSection.test.tsx` with tests asserting:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PlaylistSection } from './PlaylistSection'

describe('PlaylistSection', () => {
  it('embeds the supplied Spotify playlist in a titled lazy-loading iframe', () => {
    render(<PlaylistSection />)

    const frame = screen.getByTitle('Playlist ARQUIVO061 no Spotify')
    expect(frame).toHaveAttribute(
      'src',
      'https://open.spotify.com/embed/playlist/5pbJ42jJ9g4GOxWt5VWNxF?utm_source=generator&theme=0',
    )
    expect(frame).toHaveAttribute('loading', 'lazy')
  })

  it('shows the section heading and a direct link to the playlist', () => {
    render(<PlaylistSection />)

    expect(screen.getByRole('heading', { name: 'Trilha do arquivo.' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /abrir playlist no spotify/i })).toHaveAttribute(
      'href',
      'https://open.spotify.com/playlist/5pbJ42jJ9g4GOxWt5VWNxF?si=VQbk2HszRtGIAfePhJf1yA',
    )
    expect(screen.getByRole('link', { name: /abrir playlist no spotify/i })).toHaveAttribute(
      'target',
      '_blank',
    )
    expect(screen.getByRole('link', { name: /abrir playlist no spotify/i })).toHaveAttribute(
      'rel',
      'noreferrer',
    )
  })
})
```

- [x] **Step 2: Run the focused test and confirm it fails because the component is missing**

Run: `npm test -- --run src/components/PlaylistSection.test.tsx`

Expected: FAIL resolving `./PlaylistSection`.

- [x] **Step 3: Implement the component**

Create a semantic section with `id="trilha"`, a short Portuguese introduction, an iframe with the exact embed URL, `title="Playlist ARQUIVO061 no Spotify"`, `loading="lazy"`, `allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"`, and `allowFullScreen`. Add the direct Spotify anchor with `target="_blank"` and `rel="noreferrer"`. Do not put autoplay parameters in the embed URL.

- [x] **Step 4: Integrate section and responsive styling**

Import `PlaylistSection` in `src/App.tsx` and render it immediately after `collection-section` and before `manifesto-section`. In `src/styles.css`, add a dark ink archive section with a two-column desktop grid (copy and player), lime/olive archive accents, a full-width iframe with 352px height, and a single-column layout at the existing 640px breakpoint. At mobile widths the iframe remains within the viewport and retains its 352px height. Preserve the external link visibly below or alongside the player.

- [x] **Step 5: Run the focused tests**

Run: `npm test -- --run src/components/PlaylistSection.test.tsx`

Expected: 2 tests pass.

- [x] **Step 6: Run full verification**

Run: `npm test -- --run` and `npm run build`.

Expected: all tests pass and Vite completes a production build.

- [x] **Step 7: Verify desktop and mobile rendering**

Use the existing local preview with 1440px and 390px viewport widths. Confirm the new section follows the catalogue, precedes the manifesto, has no horizontal overflow, and keeps the iframe and fallback link visible and operable. Do not claim successful Spotify playback if the external provider is unavailable during local QA.

## Self-review

- Spec coverage: correct playlist ID, official embed, no autoplay/API/backend, insertion order, responsive layout, accessible iframe title/lazy loading, fallback link, tests, and build verification are covered.
- No placeholders remain; URLs, file paths, test names, and expected results are specified.
- The change is one self-contained frontend feature and does not need decomposition.

