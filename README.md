# Adaptiv AS — Marketing Website

Public website for [Adaptiv AS](https://www.adaptivservices.com) — a Norwegian IT venture building products, platforms, and infrastructure for regulated industries.

## Stack

- **Static HTML/CSS/JS** — no build process, no frameworks
- **Vercel** — hosting with clean URLs, security headers, and asset caching
- **PostHog** (EU cloud) — analytics, loaded only after cookie consent
- **Web3Forms** — contact form and newsletter submissions

## Pages

| File | URL |
|---|---|
| `index.html` | `/` |
| `what-we-do.html` | `/what-we-do` |
| `sectors.html` | `/sectors` |
| `case-studies.html` | `/case-studies` |
| `blog.html` | `/blog` |
| `about.html` | `/about` |
| `contact.html` | `/contact` |

## Structure

```
/
├── index.html
├── about.html
├── blog.html
├── case-studies.html
├── contact.html
├── sectors.html
├── what-we-do.html
├── sitemap.xml
├── robots.txt
├── vercel.json
├── css/
│   └── style.css          # All styles, including responsive breakpoints
├── js/
│   ├── i18n.js            # EN/NO language engine + translation dictionaries
│   └── consent.js         # Cookie consent banner + PostHog loader + newsletter handler
└── assets/
    ├── favicon.png
    ├── icon_dark.png
    └── og-image.png
```

## Internationalisation (EN/NO)

All pages support English and Norwegian Bokmål via `js/i18n.js`.

- Elements use `data-i18n="key"` for text content or `data-i18n-html="key"` for markup
- Language preference is stored in `localStorage` under the key `adaptiv_lang`
- The toggle calls `switchLang('en')` / `switchLang('no')` which are exposed on `window`

To add a new translation key:

1. Add `key: 'English text'` to the `en` object in `js/i18n.js`
2. Add `key: 'Norsk tekst'` to the `no` object
3. Add `data-i18n="key"` to the HTML element

## Analytics & Privacy

PostHog is loaded **only after** the user clicks Accept on the cookie banner. Declining or ignoring the banner means no analytics scripts run. Consent is stored in `localStorage` under `adaptiv_cookie_consent`.

## Local Development

No build step needed — open any HTML file directly in a browser, or serve with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deployment

Pushes to `main` deploy automatically via Vercel. Clean URLs are enabled (`/about` not `/about.html`).

## SEO

- Canonical tags and Open Graph meta on every page
- `sitemap.xml` submitted to Google Search Console
- `robots.txt` allows all crawlers and points to sitemap
- JSON-LD structured data (`Organization`, `WebPage`, `AboutPage`, `CollectionPage`, `Blog`, `ContactPage`)
