# Portfolio Site

Personal portfolio for me. A single-page React app that covers work experience, selected projects, and writing.

## Stack

- React 19 + TypeScript, bundled with Vite
- Tailwind CSS v4 (CSS-first config in `src/index.css`)
- motion for scroll and hover animation
- Vercel for deployment and web analytics

## Getting started

```bash
pnpm install
pnpm dev
```

Open http://localhost:5173.

## Scripts

| Command        | What it does                                                        |
| -------------- | ------------------------------------------------------------------- |
| `pnpm dev`     | Start the Vite dev server                                           |
| `pnpm build`   | Fetch the latest Medium posts, type-check, and build for production |
| `pnpm lint`    | Run ESLint                                                          |
| `pnpm preview` | Serve the production build locally                                  |

## How the writing section works

`scripts/fetch-medium.mjs` pulls the six most recent posts from the Medium RSS feed and writes them to `src/generated/medium-posts.ts`. The build runs it first. If the feed is unreachable, the script keeps the existing file or writes an empty fallback, so the build never fails on a network error.

`src/content.ts` holds the project list, work history, and site copy. The Writing section is the only part generated from an external feed.

## Project structure

```
src/
  components/sections/   one file per page section
  components/ui/         Auralis, the WebGL hero background
  content.ts             projects, experience, copy
  generated/             medium-posts.ts, written by the build
  hooks/                 use-theme, dark mode state
  lib/                   cn() class combiner
  index.css              Tailwind v4 theme tokens
```

## Deploy

Push to the main branch on GitHub. Vercel builds with `pnpm build` and serves the static output. Analytics runs through the Vercel dashboard.
