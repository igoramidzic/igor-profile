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

Use Node.js 22 (see `.node-version`) and pnpm 12.5.1 (pinned in `package.json`).

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

## Deploy (Cloudflare Workers)

This is a fully static Astro site. Cloudflare Workers serves `dist/` directly
using `wrangler.jsonc`; no Worker script or Astro Cloudflare adapter is needed.
Unknown URLs return 404 instead of falling back to the homepage.

```bash
pnpm install --frozen-lockfile
pnpm preview:cloudflare # build and preview using Cloudflare's local runtime
pnpm exec wrangler login # authenticate once for local deployments
pnpm run deploy         # build and deploy to Cloudflare Workers
```

For Git deployments, connect this repository in Cloudflare Workers & Pages and
create a **Worker** with these build settings:

- Worker name: `igoramidzic` (must match `name` in `wrangler.jsonc`)
- Build command: `pnpm build`
- Deploy command: `pnpm exec wrangler deploy`
- Root directory: repository root

After checking the deployed `workers.dev` URL, attach `igoramidzic.com` under the
Worker's **Settings → Domains & Routes** as a custom domain and complete the DNS
cutover from Vercel. The canonical site URL in `astro.config.mjs` stays the same.
Retire the Vercel deployment after confirming the custom domain works.

Vercel Analytics has been removed. Configure Cloudflare Web Analytics separately
if visitor analytics are wanted.

If using **Cloudflare Pages** instead, use build command `pnpm build` and output
directory `dist`; Pages does not use this Workers deployment configuration.

See [Cloudflare's Astro deployment guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/#if-you-have-a-static-site).
