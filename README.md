# IESE Energy Club Website

Interactive website prototype for the IESE Energy Club. The project includes the animated homepage card carousel, editorial single-page views for Join Us / Team / Events, and the media assets currently used in the live preview.

## Current live preview

https://energy-design-replica.sumantduggal.chatgpt.site

## Tech stack

- React 19
- Vinext
- Vite
- TypeScript
- CSS in `app/globals.css`
- Static media in `public/`

The app was initially prototyped with OpenAI Sites and has been updated to build as a standard Next.js app for Vercel deployment.

## Requirements

- Node.js `>=22.13.0`
- npm

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vinext.

## Build

```bash
npm run build
```

The production build is emitted to `.next/`.

## Main files

- `app/replica.tsx` — main React application, routing, homepage carousel, editorial pages.
- `app/globals.css` — all visual styling and animations.
- `app/media.json` — maps media keys to files in `public/`.
- `public/` — images, videos, logos, QR code, and editorial assets.
- `CONTENT-GUIDE.md` — notes about editable media and copy locations.
- `PROJECT-HANDOFF.md` — current page map and implementation notes.
- `DEPLOYMENT.md` — deployment notes, including Vercel considerations.

## Current routes

- `/` — homepage.
- `/editorial-system` — full editorial page sequence.
- `/editorial-join-us` — standalone Join Us view.
- `/editorial-team` — standalone Team view.
- `/editorial-events` — standalone Events / Global Energy Day view.
- `/editorial-layout-lab` — internal drag-and-resize layout lab.

## Homepage card links

The homepage carousel currently has three cards:

- `EVENTS` → `/editorial-events`
- `THE TEAM` → `/editorial-team`
- `WHY US` → `/editorial-join-us`

## Notes for future developers

This is a visual prototype with several custom animations. Most changes will happen in `app/replica.tsx` and `app/globals.css`. Keep image replacements in `public/` and update `app/media.json` or the relevant JSX path.

Generated folders and local exports are ignored and should not be committed.