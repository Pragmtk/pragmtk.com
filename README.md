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

The site is two static pages, `index.html` (the home page: the studio, its products and contact details) and `privacy.html` (the privacy policy). There is no build step, framework or dependency.

- `css/site.css` – shared styles for both pages.
- `js/hover-effect.js` – the home page's hover effect: hovering one of the large words shows an image that follows the cursor with an RGB-shift distortion (plain WebGL). A word with `data-image` shows that image (Budj uses `img/budj.jpg`, a greyscale app screenshot); one with `data-art` shows artwork drawn in code in the brand colours (Bateleur, until it has a screenshot). The effect is skipped on touch screens and when reduced motion is requested.
- `fonts/` – [Le Murmure](https://velvetyne.fr/fonts/le-murmure/) by Jérémy Landes / Velvetyne, used under the SIL Open Font License (`fonts/LeMurmure-OFL.txt`).

## Running locally

Serve the folder with Node.js (the pages use root-relative paths, so opening the file directly won't load the styles):

```sh
npx serve -l 8000
```

Then visit <http://localhost:8000>.

## Brand colours

| Use        | Hex       |
|------------|-----------|
| Page       | `#FFFAF4` |
| Logo tile  | `#E8E4DB` |
| Ink / mark | `#3D3739` |

## Deployment

Upload the whole folder to any static host.

## Analytics and consent

`js/analytics.js` is loaded at the top of every page's `<head>`. It sets Google Consent Mode v2 defaults (everything denied), loads the GA4 Google tag, and shows a cookie banner. Accepting grants `analytics_storage` only; advertising signals always stay denied. The choice is kept in `localStorage` (`pragmtk-consent`) and can be changed from the **Cookies** footer link (any element with `data-consent-open`). Rejecting removes existing `_ga` cookies.

The GA4 measurement ID is `GA_ID` at the top of `js/analytics.js`; don't add Google's `gtag.js` snippet to the pages as well. A `consent_update` event is pushed to the data layer whenever the visitor makes a choice.

---

© Pragmtk Limited. All rights reserved.
