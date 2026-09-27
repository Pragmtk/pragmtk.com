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

Upload the whole folder to any static host. The pages load nothing from other servers.

---

© Pragmtk Limited. All rights reserved.
