# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Stack

**Next.js 14 App Router + TypeScript + Tailwind CSS.** Deployed on Vercel (auto-deploy on push to `main`).

- UI: React Server/Client Components under `app/`
- Styling: Tailwind + a small set of CSS custom properties in `app/globals.css` (theming). No CSS framework beyond Tailwind.
- Animation: `framer-motion` (wrappers in `components/motion.tsx`; respect `prefers-reduced-motion`)
- Icons: `lucide-react`
- Analytics: `@vercel/analytics` (no PostHog, no cookie-consent banner in the app)

## Dev & Deploy

```bash
npm run dev      # local dev
npm run build    # production build (run before pushing — Vercel builds on push)
npm run lint
# Deploy: push to main. Vercel auto-deploys. No manual step.
```

## Routes (App Router)

| Route | File |
|---|---|
| `/` | `app/page.tsx` |
| `/what-we-do` | `app/what-we-do/page.tsx` |
| `/sectors` | `app/sectors/page.tsx` |
| `/case-studies` | `app/case-studies/page.tsx` |
| `/blog` | `app/blog/page.tsx` |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` (redirects to a legacy standalone `public/<slug>.html` article) |
| `/about` | `app/about/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| 404 / error | `app/not-found.tsx`, `app/error.tsx` |

## Content & i18n

- **Structured content** lives in `lib/data.ts` (capabilities, sectors, case studies, services, principles) as bilingual `{ en, no }` objects, typed with `satisfies`.
- **UI strings** live in `lib/i18n.ts` (`UI` object). Read via `useLang()` from `components/lang-provider.tsx` and the `loc()` helper.
- Language is **client-side state** (`LangProvider`, default `no`, stored in `localStorage`). Known limitation: pages are `'use client'`, so localized copy renders client-side and Norwegian content is not server-rendered for crawlers. A future refactor to locale-segmented server routes is the fix (see the review in the vault `adaptiv-business` project).
- **Writing convention: no em-dashes** in any copy (use commas, colons, or restructure), natural human prose, British/Norwegian-English spelling (organisation, optimisation). Applies to both `en` and `no`.

## Legacy blog articles (important)

The 7 `public/blog-*.html` files are standalone pre-Next.js articles. They **still depend on** `public/css/style.css`, `public/js/i18n.js`, and `public/js/consent.js`. Do **not** delete those assets while the articles are served this way; `/blog/[slug]` redirects to them. Bringing articles into the App Router (MDX/RSC) is the clean long-term fix.

## Components
`nav.tsx`, `footer.tsx`, `newsletter-form.tsx`, `motion.tsx`, `theme-provider.tsx` (+ `theme-script.tsx` for FOUC-safe theme), `lang-provider.tsx`.

## SEO
- Metadata: root `app/layout.tsx` sets `metadataBase`, default title/OG/Twitter + Organization JSON-LD. The blog dynamic route uses `generateStaticParams` + `generateMetadata`. **Per-page metadata on the static routes is currently missing** (they are `'use client'`); adding it is part of the server-component refactor.
- `robots.txt`, `sitemap.xml` (static; should become `app/sitemap.ts`).
- Every new page: add unique metadata and update the sitemap.

## Config
- `next.config.js` — security headers; `images.unoptimized: true` (Vercel can optimize; revisit).
- `vercel.json` — `{ "framework": "nextjs" }`.
- Public client-side keys (Web3Forms access key in `app/contact/page.tsx` + newsletter; designed to be public). No server env vars.

## Forms
Contact + newsletter POST to `https://api.web3forms.com/submit`. Access key hardcoded (public by design). Consider adding the Web3Forms honeypot/botcheck field.
