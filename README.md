# Gabriel Silva: portfolio

My personal portfolio: a terminal / Blade Runner–themed single page with a boot sequence, rain canvas, CRT overlay, an ambient synth drone and a live "system log".

- **Bilingual:** English and Portuguese. All copy lives in `app/lib/copy.ts`, and visitors whose browser isn't set to Portuguese see English by default.
- **Content-driven:** projects, stack and experience come from `app/lib/content.ts`, so updating the site means editing data, not JSX.
- **Built with:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 and the Web Audio API (no audio files).

## Run locally

```bash
npm install
npm run dev   # http://localhost:3000
```

## Deploy (Vercel, Hobby plan)

The whole site is prerendered as static content, so it fits the free tier with no configuration:

1. On [vercel.com/new](https://vercel.com/new), import this repository. The Next.js preset is detected automatically; no environment variables are needed.
2. Every push to `main` redeploys production; other branches get preview URLs (not indexed).

Absolute URLs (canonical, Open Graph, `robots.txt`, `sitemap.xml`) come from `VERCEL_PROJECT_PRODUCTION_URL`, which Vercel sets on its own, and follow a custom domain once one is added. The link preview image is generated at build time from `app/opengraph-image.tsx`.

## Structure

```
app/
  components/system/  # boot screen, rain canvas, cursor, terminal, i18n/audio provider
  components/ui/      # page sections: hero, projects, stack, experience, about, contact
  lib/content.ts      # projects, stack, timeline, contacts
  lib/copy.ts         # all text, in PT and EN
  lib/site.ts         # public URL, title and description
  opengraph-image.tsx # link preview card (1200x630)
public/projects/      # project demos and screenshots
```
