# Robert Mitchell — AI Marketing Automation & Training

Personal site for [robertmitchell.co](https://robertmitchell.co). Astro static site, deployed to Netlify.

Ported from a Claude Design prototype (`prototype.zip` in the repo root — kept for reference).

## Stack

- [Astro](https://astro.build) 5.x, static output, near-zero JS shipped
- [Astro content collections](https://docs.astro.build/en/guides/content-collections/) for classes and posts (Markdown)
- [Netlify Forms](https://docs.netlify.com/forms/setup/) for contact and newsletter capture (no backend)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — auto-generated sitemap
- Google Fonts: Geist (sans), JetBrains Mono (display + mono)

## Local development

```bash
nvm use          # picks up Node 20 from .nvmrc
npm install
npm run dev      # http://localhost:4321
```

Other scripts:

```bash
npm run build    # static build to dist/
npm run preview  # preview the production build
npm run check    # Astro type check
```

## Project structure

```
src/
  site.config.ts        # brand, nav, live-class flag, contact info
  layouts/
    BaseLayout.astro    # <head>, fonts, Netlify form detection shells, TopBar + Footer
  components/           # Tick, SpecRow, SectionHeader, InvertBlock, TopBar, Footer, forms, etc.
  pages/                # one .astro per route: /, /services/, /classes/, /writing/, /about/, /contact/, /thanks/
  content/
    config.ts           # collection schemas
    classes/            # one .md per class (upcoming + past)
    posts/              # one .md per post
  styles/
    tokens.css          # CSS custom props (accent, ink, paper, etc.)
    global.css          # reset, keyframes, body, responsive helpers
public/                 # favicon, robots.txt
```

## Adding content

### Classes

Drop a new Markdown file into `src/content/classes/`:

```markdown
---
num: "0.04"
title: "Title here"
date: "Thu 14 May · 18:00 GMT"        # long form shown on cards
dateShort: "14 May"                    # short form shown in badges
duration: "60 min"
status: "upcoming"                     # or "past"
order: 4                               # higher = more recent
abstract: "One-line description."
---
```

Upcoming classes sort by `order` ascending. Past classes sort by `order` descending — set the newest past class to `-1`, next oldest `-2`, etc.

### Posts

Drop a new Markdown file into `src/content/posts/`:

```markdown
---
num: "0.05"
tag: "Essay"                           # Essay | Playbook | Note
title: "Title here"
date: "May 02"
read: "8 min"
excerpt: "One-line excerpt shown on the index."
order: 5
---

Body copy in Markdown when you're ready — currently the site only renders the index.
```

## Brand, nav, and site-wide copy

Edit `src/site.config.ts`:

- `hero.headline`, `hero.sub`, `hero.ctaLabel` — home-page hero copy
- `live.on: true` — flips on the sticky red-pulse live bar above the nav
- `contact.*` — telegram / email / youtube / location shown on the contact page and footer
- `nav[]` — reorder or rename nav items

## Forms

Two Netlify forms:

- **contact** — full form on `/contact/`
- **newsletter** — email capture on `/` and `/classes/`, with a hidden `source` field so you can tell them apart in the Netlify dashboard

Both redirect to `/thanks/` on submit. Submissions show up under **Netlify site → Forms** once deployed. Netlify only detects forms on the *deployed* HTML, so forms don't work in `npm run dev` — but they work the moment you deploy.

## Deploy to Netlify (via GitHub)

1. Push to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial Astro port of Robert Mitchell prototype"
   git branch -M main
   git remote add origin git@github.com:<you>/<repo>.git
   git push -u origin main
   ```
2. In Netlify: **Add new site → Import from GitHub → pick the repo.** Netlify reads `netlify.toml` — build command, publish dir, and Node version are already configured.
3. First deploy takes ~60 seconds. Form detection happens automatically during the build.
4. Point your custom domain at the Netlify site (or use the `*.netlify.app` URL for now).

## Crawling is disabled

The site is currently set to **noindex** — both via `public/robots.txt` (`Disallow: /`) and a `<meta name="robots" content="noindex, nofollow">` tag in `BaseLayout.astro`. To allow crawling once you're ready to go public:

1. Replace `public/robots.txt` contents with `User-agent: *` / `Allow: /` and a sitemap line
2. Remove the two robots `<meta>` tags from `src/layouts/BaseLayout.astro`

## Prototype reference

`prototype.zip` is the original Claude Design export. It's the visual / copy source of truth. Not built, not shipped, not imported anywhere — keep it for reference or drop it when you no longer need it.

## What's not here yet (v2)

- Individual post pages (`/writing/[slug]/`) — trivial to add with a `[...slug].astro` route when you start writing post bodies
- RSS feed (`@astrojs/rss`)
- Analytics (add a Plausible/Fathom snippet to `BaseLayout.astro`)
- Live YouTube embed on `/classes/` — currently a striped placeholder tile
- Dark mode toggle (prototype's dark palette is intentionally unused)
