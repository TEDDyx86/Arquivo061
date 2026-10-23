# ARQUIVO061 — Spotify Playlist Embed

## Goal

Add an official Spotify player for the ARQUIVO061 playlist without introducing a backend, Spotify API credentials, or autoplay.

## Approved direction

Add a dedicated, branded section titled **“Trilha do arquivo”** between the product catalogue and the existing manifesto. The section uses the Spotify playlist embed for playlist `5pbJ42jJ9g4GOxWt5VWNxF`, preserving the storefront's archive visual language and keeping the player clearly identifiable as Spotify.

## User experience

- Visitors can play the playlist in the embedded Spotify interface.
- Playback begins only after the visitor interacts with the player; do not autoplay.
- The section is responsive and fits the existing desktop and mobile page flow.
- The iframe has a descriptive accessible title and loads lazily.
- Spotify is a third-party embedded service. If it cannot load, the page remains usable and the section provides a direct link to open the playlist on Spotify.

## Technical approach

- Use Spotify's standard playlist embed URL: `https://open.spotify.com/embed/playlist/5pbJ42jJ9g4GOxWt5VWNxF`.
- Use a responsive `<iframe>` with the minimum permissions needed for Spotify playback; no Spotify Web API or server integration.
- Preserve the existing content order outside the insertion point: catalogue → playlist section → manifesto → footer.
- Style the section with existing ARQUIVO061 palette and typography rather than attempting to restyle Spotify's cross-origin controls.

## Out of scope

- Spotify authentication, playback API, user-specific personalization, or account linking.
- Automatic playback or custom transport controls.
- Changes to the cart, product data, or existing playlist content.

## Verification

- Confirm the player URL uses the supplied playlist ID.
- Confirm desktop/mobile layout has no horizontal overflow and the iframe remains within the content width.
- Confirm the page still loads if the Spotify embed is unavailable and the direct playlist link remains available.
- Run the existing tests and production build.

## Self-review

- No placeholders or undecided implementation details remain for the approved direction.
- The section insertion point, playlist ID, privacy/availability fallback, responsive behavior, and non-autoplay policy are explicit.
- Scope is a single frontend enhancement with no backend dependency.
