# Adding your media

All image and video slots are intentionally blank. No reference media is downloaded or used by this site.

1. Place supplied files in `public/media/`.
2. Add the appropriate key and local path to `app/media.json`.
3. The matching placeholder is replaced automatically. Failed media returns to its labeled placeholder.

Example:

```json
{
  "hero-video": "/media/hero.mp4",
  "collage-1": "/media/industrial.jpg",
  "sector-electricity": "/media/electricity.mp4",
  "portrait-Bill Gates": "/media/bill-gates.jpg",
  "logo-Fervo Energy": "/media/fervo.svg"
}
```

Available keys:
- `hero-video` — muted looping hero film
- `collage-1` through `collage-14` — image collage
- `energy-powerlines` — opportunity image
- `founder-background` — muted looping landscape film
- `founder-portrait` — video trigger portrait
- `founder-video` — full founder video
- `sector-manufacturing`, `sector-electricity`, `sector-agriculture`, `sector-transportation`, `sector-buildings` — sector films
- `people-hero`, `programs-hero` — photographs
- `portrait-NAME` — executive photographs, exact name as in `app/content.ts`
- `logo-NAME` — company logo, exact name as in `app/content.ts`
- `perspective-thumb-1` through `perspective-thumb-10` — thumbnails
- `perspective-video-1` through `perspective-video-10` — videos

Text, company records, and editorial titles are in `app/content.ts`. Records are a representative set from the inspection, not a complete export. The legal pages, article files, external destinations, and newsletter integration are placeholders awaiting approved content. No form data is transmitted or stored.

Use MP4/H.264 for background films, compressed WebP/JPEG for photos, and SVG/PNG for logos. The layout uses system sans-serif fonts until supplied font files are available.

The source includes multi-route rendering, keyboard-dismissable native dialogs, responsive layouts, and a reduced-motion alternative. The emblem is a CSS approximation, to be replaced by your supplied brand mark if exact fidelity is needed.
