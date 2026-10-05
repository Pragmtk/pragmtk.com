```
######
############        ###
###############     ######     #
#################   ########   ###
##################  #########  #####
################### ########## ######
################### #################
######################################
#####################################
################### #################
################### ########## #####
##################  #########  ####
################    ########   ###
##############      #####      #
###########         ##
##
##############
################
##################
###################
####################
```

# pragmtk.com

The landing page for **Pragmtk Limited**.

## Overview

A [Next.js](https://nextjs.org) (App Router) site styled with [Tailwind CSS](https://tailwindcss.com) v4, statically exported and hosted on GitHub Pages.

- `app/` – one folder per page (`page.tsx`), plus the root `layout.tsx` (fonts, shared header/footer, analytics), `globals.css` (Tailwind theme and element defaults), `sitemap.ts` and `robots.ts`.
- `components/` – `Header`, `Footer`, `Navigation` (marks the current page's link), `Logo`, `BudjLogo`, `LegalPage` (typography and clause numbering for the privacy and terms pages), `CookieConsent`, `Analytics` and `JsonLd`.
- `lib/site.ts` – site URL and the primary and footer navigation links.
- `lib/metadata.ts` – `pageMetadata()` builds each page's title, description, canonical URL and Open Graph tags.
- `lib/consent.ts` – Google Analytics consent logic.
- `public/` – files served as-is: favicons, the Open Graph image and `CNAME`.
- `app/fonts/` – Metaor Aftershift (the wordmark). IBM Plex Sans and Mono are self-hosted at build time via `next/font`.

## Running locally

```sh
pnpm install
pnpm dev
```

Then visit <http://localhost:3000>. To check the production export, run `pnpm build` (writes `out/`) then `pnpm start` to serve it at <http://localhost:8000>.

## Styling

Styles are Tailwind utility classes in the markup. The colours and fonts are theme variables in `app/globals.css` (`--color-bg`, `--color-fg`, `--color-fg-mid`, `--color-fg-dim`, `--color-border`, `--color-accent`, `--color-budj-*`, `--font-sans`, `--font-mono`, `--font-display`), so they're available as utilities like `text-fg-mid`, `border-border` or `font-display`. `mobile:` is a custom variant for screens 600px wide and below.

## Brand colours

| Use        | Hex       |
|------------|-----------|
| Page       | `#FFFAF4` |
| Logo tile  | `#E8E4DB` |
| Ink / mark | `#3D3739` |

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the static export and deploys `out/` to GitHub Pages. The repository's Pages source must be set to **GitHub Actions** (Settings → Pages).

## Analytics and consent

`components/Analytics.tsx` runs an inline script at the top of `<head>` that sets Google Consent Mode v2 defaults (everything denied), then loads the GA4 Google tag. `components/CookieConsent.tsx` shows the cookie banner. Accepting grants `analytics_storage` only; advertising signals always stay denied. The choice is kept in `localStorage` (`pragmtk-consent`) and can be changed from the **Cookies** footer link (any element with `data-consent-open`). Rejecting removes existing `_ga` cookies.

The GA4 measurement ID is `GA_ID` in `lib/consent.ts`; don't add Google's `gtag.js` snippet to the pages as well. A `consent_update` event is pushed to the data layer whenever the visitor makes a choice.

---

© Pragmtk Limited. All rights reserved.
