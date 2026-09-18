# Project handoff

## Purpose

This project is the working website prototype for the IESE Energy Club. It combines a cinematic homepage, a 3-card navigation carousel, and editorial-style destination pages.

## Current user-facing flow

1. User lands on `/`.
2. Hero section introduces the club.
3. Card carousel section shows three cards:
   - `EVENTS`
   - `THE TEAM`
   - `WHY US`
4. Each card opens a standalone editorial view and locks scrolling so users stay on that selected page.
5. Each editorial page has a back-arrow button returning to the homepage Explore More button area.

## Editorial views

The editorial system is implemented inside `EditorialSystem` in `app/replica.tsx`.

- Full sequence: `/editorial-system`
- Join Us only: `/editorial-join-us`
- Team only: `/editorial-team`
- Events only: `/editorial-events`

The standalone routes pass `forcedSection` into `EditorialSystem`.

## Important assets

- `public/energy-picture-1.jpg` — Events card image.
- `public/energy-picture-2.jpg` — Why Us card image and Join Us image.
- `public/energy-picture-3.jpg` — Global Energy / Events editorial image.
- `public/energy-picture-5.jpg` — Team card image.
- `public/editorial-page-2-energy-club.png` — Team editorial page image.
- `public/wired-woven-logo.png` — Wired & Woven logo.
- `public/iese-energy-qr.png` — QR code used on Join Us.
- `public/iese-energy-club-logo.svg` and variants — IESE Energy Club marks.

## Where to edit common items

### Homepage card carousel

Edit `cardFaces` in `app/replica.tsx`.

Each entry controls:

- visible label
- image
- target route

### Editorial pages

Edit `EditorialSystem` in `app/replica.tsx`.

### Styling and layout

Edit `app/globals.css`.

Most custom layout classes are intentionally specific, for example:

- `.home-card-*`
- `.lab-*`
- `.editorial-*`

### Media mappings

Edit `app/media.json` for media used through the shared `Media` component.

## Local export folders

The repository may have local folders such as `editorial-system-export/`, `extracted-assets/`, `tmp/`, and generated archives. They are handoff/work artifacts and are intentionally ignored.

## Before handing to another developer

Run:

```bash
npm install
npm run build
```

If both succeed, the project is ready for GitHub handoff.