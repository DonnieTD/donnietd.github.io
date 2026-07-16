# donnietd.github.io — CV & Portfolio

Personal CV and portfolio site for **Donovan van der Linde**, live at [donnietd.github.io](https://donnietd.github.io/).

A static React app with a glassmorphism UI, animated background, four color themes, and a print stylesheet that turns the same page into a clean, recruiter-ready PDF.

## Features

- **Glassmorphism design** — frosted-glass cards, chips, and nav over animated gradient orbs that drift behind the page
- **Four themes** — Light, Dark, Ocean, and Sunset, switchable from the nav, persisted in `localStorage`, defaulting to the OS color scheme with no flash of the wrong theme on load
- **Animations** — hero entrance, scroll-reveal sections (IntersectionObserver), animated skill bars, hover lifts on project cards; all disabled under `prefers-reduced-motion`
- **CV as PDF** — the "CV as PDF" button opens the browser print dialog with a dedicated print stylesheet: the glass UI flattens into a single-column, always-light document with a proper header, and it adapts to any paper size (A4, Letter, …). Choose "Save as PDF" as the destination.
- **Projects from GitHub** — the Projects section mirrors the [pinned repositories](https://github.com/DonnieTD) with links and language badges

## Tech stack

- [React 18](https://react.dev/) + TypeScript
- [Vite](https://vite.dev/) for dev server and build
- Plain CSS (custom properties per theme) — no CSS framework
- No runtime dependencies beyond React itself

## Editing content

All CV content lives in one typed file: [`src/data.ts`](src/data.ts)

| Export          | Drives                                          |
| --------------- | ----------------------------------------------- |
| `profile`       | Name, tagline, avatar, contact chips, PDF header |
| `languages`     | Language pills (hero) and PDF header line        |
| `interests`     | Interest pills (hero) and PDF header line        |
| `careerProfile` | Career Profile section                           |
| `experiences`   | Experience timeline                              |
| `projects`      | Project cards (empty array hides the section)    |
| `skills`        | Skill bars (`level` is 0–100)                    |

The profile photo is `public/profile.jpeg`; the favicon is `public/favicon.ico`.

Themes are defined as CSS variable blocks at the top of [`src/styles.css`](src/styles.css) (`:root[data-theme="..."]`). To add a theme: copy a block, add its id to `THEMES` in [`src/App.tsx`](src/App.tsx) and to the theme list in [`index.html`](index.html)'s boot script, and give it a `.theme-dot-<id>` swatch.

## Development

Requires Node 22+ and [pnpm](https://pnpm.io/).

```sh
pnpm install
pnpm dev      # dev server with HMR
pnpm build    # type-check + production build into dist/
pnpm preview  # serve the production build locally
```

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and deploys `dist/` to GitHub Pages (the repository's Pages source is set to **GitHub Actions**). No build artifacts are committed.

## Project structure

```
index.html          entry point, fonts, pre-paint theme boot script
src/
  data.ts           all CV/portfolio content (edit this)
  App.tsx           components: nav, hero, timeline, projects, skills, print header
  styles.css        themes, glass UI, animations, print stylesheet
  main.tsx          React bootstrap
public/             static assets (profile photo, favicon)
```
