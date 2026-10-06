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

## Structure

```
app/
  components/system/  # boot screen, rain canvas, cursor, terminal, i18n/audio provider
  components/ui/      # page sections: hero, projects, stack, experience, about, contact
  lib/content.ts      # projects, stack, timeline, contacts
  lib/copy.ts         # all text, in PT and EN
public/projects/      # project screenshots
```
