# Donovan van der Linde — CV & Portfolio

A static React (Vite + TypeScript) CV/portfolio site with light & dark mode and a print-optimized "Download CV (PDF)" flow.

## Editing content

All CV content lives in [`src/data.ts`](src/data.ts) — profile, languages, interests, career summary, experience, projects, and skills. Edit that one file to update the site. Set `projects` to an empty array to hide the Projects section.

The profile photo is `public/profile.jpeg`.

## Development

```sh
pnpm install
pnpm dev      # local dev server
pnpm build    # type-check + production build into dist/
pnpm preview  # serve the production build locally
```

## PDF download

The "Download CV (PDF)" button opens the browser's print dialog with a dedicated print stylesheet (clean, light, single-document layout). Choose "Save as PDF" as the destination.

## Deployment

Pushes to `main` deploy automatically to GitHub Pages via `.github/workflows/deploy.yml`. In the repository settings, set **Pages → Source** to **GitHub Actions** once.
