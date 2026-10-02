# Card age color
Colors each card by how long it has sat in its current column: green when it arrives, yellow after 18 hours, orange after 36 hours, red after 54 hours. Red cards blink.

# Overview
Unlike the built-in Card Aging power-up (which fades stale cards out), this script keeps cards fully visible, recolors the whole card, and adds an age badge (e.g. `17h`, `2d 6h`) in the card header. The card's own card type color is replaced while the script is enabled.

Edit `STAGES` at the top of `card-age-color.js` to change the colors or thresholds, `BLINK_RED` to turn blinking off, and `AGE_FIELD` to change the attribute the age is measured from (`moved_at` by default; use `created_at` for total age).

The script only runs on boards where it is added under Developer Tools, so enable it per board.
