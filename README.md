# Tolulope Adegoke | Portfolio

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.

## Structure

- `/`: home
- `/work/sabi`: Sabi case study
- `/work/sonix`: Sonix case study
- `/about`: about page

Content lives directly in each page component under `app/`. Shared bits
(nav links, contact info) live in `lib/data.ts`. Screenshots are static
files in `public/images/`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

Note: the build fetches Fraunces and Inter from Google Fonts at build
time via `next/font/google`. This requires normal internet access. If
you build behind a restrictive proxy/firewall, either allow
`fonts.googleapis.com` / `fonts.gstatic.com`, or switch `app/layout.tsx`
to `next/font/local` with downloaded font files.

## Deploy

Deploys as-is to Vercel (recommended, zero config) or any Node hosting
that supports Next.js. No environment variables are required.

## Updating content

- Sabi traction numbers in `app/work/sabi/page.tsx` (search for "Traction")
  are current as of this build. Update the `<Stat>` values and prose
  as real numbers change.
- To swap or add screenshots, drop images in `public/images/` and
  reference them from the relevant page with the `DesktopShot` (Sabi,
  wide screenshots) or `PhoneShot` (Sonix, portrait screenshots)
  components in `components/Shot.tsx`. Pass the real pixel `width`/
  `height` of the file so Next.js can reserve the right aspect ratio.
