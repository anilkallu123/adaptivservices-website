# Front-end test prompt — adaptivservices.com (Claude for Chrome)

Paste everything under the line into **Claude for Chrome**. The site is public (no login). It is bilingual (English + Norwegian Bokmål), has a dark/light theme, and defaults to Norwegian.

**Do NOT complete a real contact/newsletter submission** (it emails the owner). Test the form validation and states only; stop before a successful send, or if you must submit once, put `[TEST]` in the message so it is obviously a test.

---

You are a QA + front-end reviewer testing the live marketing site **https://www.adaptivservices.com**. It is a bilingual (English / Norwegian) Next.js site with a dark/light theme, defaulting to Norwegian. Work through the checks below in order. For each numbered check state **PASS** or **FAIL** with one line on what you saw. Do not stop on a failure, record it and continue. Open DevTools (Console + device toolbar) as needed. At the end, give a summary table (check · PASS/FAIL · note) and a short verdict.

## A. Navigation & routing
1. Load `/`. The top nav shows: logo "Adaptiv AS", links (Home / What We Do / Sectors / Case Studies / Insights / About), a "Get in touch" button, and EN / NO + theme toggles.
2. Click each nav link (What We Do, Sectors, Case Studies, Insights, About, Get in touch). Each loads a distinct page with real content, no 404, no error boundary.
3. **Per-page titles (regression):** on each of /about, /what-we-do, /sectors, /case-studies, /contact, /blog, check the browser tab title. Each must be DIFFERENT and page-specific (e.g. "About | Adaptiv AS", "Sectors | Adaptiv AS"), not all the same "Adaptiv AS: Build What Matters".
4. The active nav item is visually indicated on the page you are on.

## B. Language toggle (EN / NO)
5. On the home page, note the hero and section text (it should be Norwegian by default). Click the language toggle to English. The body copy switches to English across the page.
6. **Footer translation (regression):** scroll to the footer. Toggle NO/EN and confirm the footer headings translate too (Norwegian: "Selskap / Tjenester / Hold kontakten" ↔ English: "Company / Services / Stay in touch"). The footer must NOT stay English when the rest is Norwegian.
7. Navigate to another page after switching language, the choice persists (still shows the language you picked).
8. **`<html lang>` (regression):** in DevTools Elements, check the `<html>` tag `lang` attribute. It should be `no` by default and change to `en` when you toggle to English (not stuck on one value).

## C. Theme toggle (dark / light)
9. Toggle to light mode. The whole page switches to a light palette, text stays readable (good contrast), nothing is invisible.
10. **Light-mode nav (regression):** in light mode, scroll down so the nav becomes "scrolled" (it gets a background). Confirm the scrolled nav bar is LIGHT, not a dark/near-black bar over the light page.
11. Toggle back to dark, confirm it is clean. Refresh the page in each mode, no flash of the wrong theme on load (FOUC).

## D. Content quality (regression)
12. **No em-dashes:** scan the visible copy on home, about, what-we-do, sectors, case-studies, and one blog article. There should be NO "—" em-dashes anywhere (commas/colons instead).
13. About page: the founder card shows a bio and skill tags. In Norwegian mode the tags should read Norwegian (e.g. "Skyarkitektur", "KI- og ML-systemer", "NSM/DIFI-samsvar").
14. Spot-check for obvious typos or untranslated English left inside Norwegian text, and vice versa.

## E. Forms (validation only, do NOT really submit)
15. `/contact`: the contact form has labelled fields. Submit empty, browser/inline validation blocks it. Enter an invalid email, it is rejected. (Do not complete a real send.)
16. Newsletter (in the footer): the email input works and has an accessible label (not just a placeholder). Try an invalid email, it is rejected. (Do not really subscribe.)

## F. Accessibility
17. **Skip link (regression):** press Tab once from the top of the page. A "Skip to content" link should appear (focus-visible) as the first focusable element.
18. Tab through the nav, every link and the EN/NO + theme + menu toggles are reachable and show a visible focus ring; order is logical; no keyboard trap.
19. The theme/language toggle buttons have sensible accessible names (hover/inspect: e.g. "Switch to light theme", not just "Toggle").

## G. Responsive
20. Device toolbar at 375px (phone): the nav collapses to a hamburger; open it, the menu links work. No horizontal scroll, no cut-off or overlapping content on home, about, and a blog article.
21. At 375px the hero, cards, and footer stack cleanly and text is readable.

## H. Blog
22. `/blog`: the insights list shows the article cards; click one. The article opens and renders with styling (not unstyled).
23. **Blog language (regression):** on a blog article, confirm there is NO "NO" language toggle offering Norwegian (articles are English-only by design, the toggle should not be present or should not claim a Norwegian version that does not exist).
24. The article body has no em-dashes.

## I. Technical hygiene
25. `https://www.adaptivservices.com/sitemap.xml` returns XML (HTTP 200) listing the site's URLs. `https://www.adaptivservices.com/robots.txt` returns 200 and references the sitemap.
26. On a couple of pages, check the DevTools Console for errors or 404s on load, report any verbatim.
27. Reduced motion: if you can enable "prefers-reduced-motion" (DevTools Rendering panel > Emulate CSS prefers-reduced-motion: reduce), reload, confirm entrance animations are suppressed and all content is fully visible (nothing stuck faded/hidden).

## Final report
Produce a table of every check (number · PASS/FAIL · one-line note), then a verdict: is the site functional, correctly bilingual, theme-safe, and accessible? Call out any FAIL prominently, especially the regression checks (per-page titles, footer translation, html lang, light-mode nav, em-dashes, skip link, blog toggle, sitemap/robots).
