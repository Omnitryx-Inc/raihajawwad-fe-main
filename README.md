# Raiha & Jawwad — Nikkah Invitation

A single-page Nikkah invitation for [raihajawwad.love](https://raihajawwad.love), built by [Omnitryx Inc.](https://omnitryx.ca)

Open the invitation → hero → a short verse → live countdown → schedule (with Add to Calendar) → venue & map →
RSVP. One scroll, no other pages.

## Stack

- **Next.js 14** (App Router) + **TypeScript**, built as a fully static export
- **Tailwind CSS**, a black / burgundy / gold palette
- **GitHub Pages** hosting via **GitHub Actions**, on the custom domain `raihajawwad.love`
- No backend, no analytics, no icon/animation libraries — hand-rolled SVG icons and CSS-only animations

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Editing the content

Everything guest-facing lives in **`src/lib/site.config.ts`**: names, date/time, venue, address, the Google
Maps links, the schedule (Gathering / Nikkah / Dinner), and the RSVP contacts. Edit that one file for any wording
or detail change.

- **`src/data/gallery.ts`**: venue photos. Empty by default (the map + address carry the Venue section on their
  own); add entries here and drop the matching files in `public/images/venue/` to show a photo grid.
- **`public/images/couple/`**: set `siteConfig.media.heroPhoto` to a path here (e.g. `/images/couple/hero.jpg`)
  to show a couple photo behind the hero. Leave it `null` for the gradient-only hero, no photo required.
- **RSVP numbers**: all three contacts share `rsvp.sharedPhone` right now. Give any one of them their own by
  adding a `phone` field to that contact in `site.config.ts`.

### Branding & colors

Colors live in `tailwind.config.ts`: `ink` (near-black, the dominant ground), `burgundy` (the primary accent,
section fills and cards), `gold` (hairlines, the butterfly/kiwi mark, buttons — used sparingly), and `ivory`
(text and small surfaces on dark). Fonts are set up in `src/app/layout.tsx` via `next/font/google`: Playfair
Display for headings, Parisienne for the one script accent (the ampersand, the footer signature), Inter for
body text.

The butterfly and kiwi (🦋🥝) are rendered as hand-drawn line icons in `src/components/icons.tsx` and appear as
the ornament divider between sections, the envelope seal, and low-opacity background accents
(`MotifScatter.tsx`) — the couple's own shorthand woven in rather than used as literal emoji.

### The opening animation

`src/components/invitation/EnvelopeIntro.tsx` is the full-screen seal guests tap to open the invitation. Scroll
is locked until it opens (see the `.envelope-closed` rule in `globals.css`), then it lifts away to reveal the
page. Pure CSS transitions, no animation library.

## Privacy

`public/robots.txt` disallows all crawlers, and `layout.tsx` sets `robots: { index: false }`, since the page
lists family phone numbers. It's still a public URL, so anyone with the link can open it — that's the intended
behavior for sharing with guests — this just keeps it out of search engines.

## Deploying to GitHub Pages

1. Push this repo to GitHub (already at `Omnitryx-Inc/raihajawwad-fe-main`).
2. In **Settings → Pages**, set the source to **GitHub Actions**.
3. In **Settings → Pages → Custom domain**, enter `raihajawwad.love` (the `public/CNAME` file already contains
   it, so GitHub will pick it up on the first deploy).
4. At your domain registrar, point `raihajawwad.love` at GitHub Pages:
   - **A records** for the apex domain → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
     `185.199.111.153`
   - Optionally a **CNAME record** for `www` → `omnitryx-inc.github.io`
5. Push to `main`. `.github/workflows/deploy.yml` builds and deploys automatically.
6. Once DNS propagates, enable **Enforce HTTPS** in the Pages settings.

The build always targets the root path (`NEXT_PUBLIC_USE_CUSTOM_DOMAIN` defaults to `true` in
`next.config.mjs`), since this site is only ever meant to live at `raihajawwad.love`.
