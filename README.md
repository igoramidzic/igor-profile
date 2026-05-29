# igoramidzic.com

Personal one-page site for Igor Amidzic — software engineer & founder of Kualia.
A clean, Linear-inspired light theme (indigo `#5E6AD2` accent, hairline borders,
near-white surfaces, Inter), a profile hero, a scroll-animated career timeline
(most recent first), and a Kualia spotlight. Written to be easily understood by
anyone, recruiters included.

## Stack

- **Astro** (static output) — fast, SEO-friendly single page
- **Tailwind CSS v4** + CSS custom properties for theming (light only)
- **Inter** (self-hosted via `@fontsource-variable/inter`)
- **simple-icons** for the GitHub / LinkedIn / Threads marks
- One small vanilla TS island for scroll animations (no framework runtime, tiny
  JS). Honors `prefers-reduced-motion`.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static site → dist/
pnpm preview    # preview the production build
```

## Make it yours

| What                    | Where                                                       |
| ----------------------- | ----------------------------------------------------------- |
| Your photo              | drop `public/images/igor.jpg` (auto-appears)                |
| Kualia screenshot       | drop `public/images/kualia-screenshot.png` (auto-appears)   |
| Social share image      | drop `public/og.png` (1200×630)                             |
| Timeline & content      | `src/data/timeline.ts` (single source of truth; newest first)|
| Brand logos             | `public/logos/*` — swap in official marks (any image format) |
| Colors / theme          | `src/styles/global.css` (`:root` tokens)                    |

## Deploy (Vercel)

Push to a Git repo and import it in Vercel — Astro is auto-detected (build
`astro build`, output `dist/`). No adapter needed for the static build.
