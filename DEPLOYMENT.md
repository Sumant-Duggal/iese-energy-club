# Deployment notes

## Vercel deployment

This repository is now configured as a standard Next.js app for Vercel.

Recommended Vercel settings:

- Framework preset: `Next.js`
- Install command: `npm install` or Vercel default
- Build command: `npm run build`
- Output directory: leave blank
- Node.js version: `22.x` or newer

## Local verification

```bash
npm install
npm run build
npm run dev
```

The build should produce a `.next/` folder.

## Routes

- `/` — homepage
- `/editorial-join-us` — standalone Join Us view
- `/editorial-team` — standalone Team view
- `/editorial-events` — standalone Events view
- `/editorial-system` — full editorial sequence
- `/editorial-layout-lab` — internal layout lab

## Notes

The project was originally prototyped from an OpenAI Sites/Vinext starter. The currently active deployment path for GitHub/Vercel is Next.js:

- `package.json` uses `next dev`, `next build`, and `next start`.
- `next` is included in dependencies.
- Cloudflare/OpenAI Sites helper folders are excluded from Next type checking in `tsconfig.json`.

The OpenAI Sites metadata in `.openai/hosting.json` can remain in the repo for reference, but Vercel does not use it.