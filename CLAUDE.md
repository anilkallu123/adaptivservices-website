# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

Pure static HTML/CSS/JS — no build tool, no bundler, no package.json. Deployment is via Vercel with no build command.

## Dev & Deploy

```bash
# Local development (any of these)
npx serve .
python3 -m http.server 8080

# Deploy: push to main — Vercel auto-deploys. No manual deploy step.
```

## Page Structure

Each page is a standalone `.html` file. Vercel `cleanUrls: true` means `/about.html` is served as `/about`.

| File | URL |
|---|---|
| `index.html` | `/` |
| `what-we-do.html` | `/what-we-do` |
| `sectors.html` | `/sectors` |
| `case-studies.html` | `/case-studies` |
| `blog.html` | `/blog` |
| `about.html` | `/about` |
| `contact.html` | `/contact` |
| `game.html` | `/game` (Easter egg — Bunny Run canvas game) |
| `blog-*.html` | `/blog-<slug>` (individual blog posts) |

## Internationalisation

`js/i18n.js` holds all copy in EN and NO Bokmål. Every user-visible string must go through this system — no hardcoded text in HTML.

- `data-i18n="key"` — sets `textContent`
- `data-i18n-html="key"` — sets `innerHTML` (use for markup like `<br>` or `<span>`)
- `data-i18n-placeholder="key"` — sets input `placeholder`
- `localStorage.adaptiv_lang` stores the user's choice (`'en'` or `'no'`)
- `switchLang('en')` / `switchLang('no')` are exposed on `window`

To add a new page or section: add keys to both `T.en` and `T.no` in `js/i18n.js`, then use `data-i18n` attributes. Never put display text directly in HTML elements that have a `data-i18n` attribute — it will be overwritten on load.

## Analytics & Forms

- **PostHog** (EU cloud `eu.i.posthog.com`) — loaded only after cookie consent via `js/consent.js`. Project key is hardcoded in `js/consent.js`.
- **Web3Forms** — contact and newsletter forms POST to `https://api.web3forms.com/submit`. Access key is hardcoded in `contact.html` and as a hidden input in newsletter forms across pages.
- Cookie consent stored in `localStorage.adaptiv_cookie_consent`. Banner injects 1.2 s after DOMContentLoaded if no stored choice.

## Styling

Single stylesheet: `css/style.css` (1212 lines). No CSS framework. Uses CSS custom properties for theming. Responsive breakpoints are in `style.css` — do not add inline styles.

## SEO — Required on Every Page

Each `.html` file must include:
1. `<title>` and `<meta name="description">`
2. Open Graph tags (`og:title`, `og:description`, `og:type`, `og:url`, `og:image`)
3. `<link rel="canonical">` pointing to the production URL
4. JSON-LD structured data block (type varies by page: `Organization`, `WebPage`, `BlogPosting`, etc.)

When adding a new page, also add its URL to `sitemap.xml`.

## Vercel Config

`vercel.json` sets:
- `cleanUrls: true` — `.html` extension stripped from URLs
- `trailingSlash: false`
- Security headers on all routes (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`)
- `Cache-Control: immutable` (1 year) on `/css/*` and `/assets/*`

No environment variables — all credentials are hardcoded (Web3Forms key, PostHog key). These are public-facing API keys designed for client-side use.
