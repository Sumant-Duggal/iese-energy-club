# Deployment notes

## Current build command

```bash
npm run build
```

The build output is written to `dist/`.

## Current hosting context

This project was built from an OpenAI Sites / Vinext starter and currently includes `.openai/hosting.json` for the existing Sites deployment. That file is not a secret, but it is specific to the current Sites project.

## GitHub handoff

Commit and push the `site/` folder as the repository root. Do not commit generated folders such as `dist/`, `.next/`, `.vinext/`, `.wrangler/`, local exports, or archive files.

## Vercel considerations

This project is currently a Vinext/Vite app, not a standard Next.js app. A future Vercel deployment should be validated by the developer doing the Vercel handoff.

Recommended path for Vercel:

1. Import the GitHub repository into Vercel.
2. Set Node.js to `22.x` or newer.
3. Start by trying:
   - Install command: `npm install`
   - Build command: `npm run build`
4. If Vercel does not recognize the Vinext server output, migrate the app shell to a standard Next.js project while preserving:
   - `app/replica.tsx`
   - `app/globals.css`
   - `app/media.json`
   - `public/` assets

The visual work is concentrated in those files, so migration should be manageable if Vercel requires a standard Next.js runtime.

## OpenAI Sites deployment

If continuing with OpenAI Sites, use the existing `.openai/hosting.json` project id and the normal Sites publish flow.