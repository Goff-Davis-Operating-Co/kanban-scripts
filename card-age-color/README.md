# Card age color
Colors each card by how long it has sat in its current column: green when it arrives, yellow after 18 hours, orange after 36 hours, red after 54 hours. Red cards blink.

# Overview
Unlike the built-in Card Aging power-up (which fades stale cards out), this script keeps cards fully visible, recolors the whole card, and adds an age badge (e.g. `17h`, `2d 6h`) in the card header.

- The clock starts when a card enters its current column (`moved_at`) and resets every time the card is moved. Cards that have never moved are measured from when they were created.
- Colors update by themselves while the board is open (checked every 5 minutes), so a change can appear up to 5 minutes after a threshold.
- Users with "reduce motion" turned on in their operating system see solid red instead of blinking.
- The script only changes how cards look. It never saves data.

# Card type colors
The whole card is recolored, so the card's own card type color is hidden while the script is enabled. Use it on boards where card colors carry no meaning, or set all card types on the board to a single color. Boards that use card colors to mean something (for example, one color per customer) need a different style, such as coloring only part of the card, which this version does not do yet.

# Configuration
Edit the constants at the top of `card-age-color.js`:

- `STAGES`: colors, text colors and hour thresholds.
- `BLINK_RED`: set to `false` to turn blinking off.
- `AGE_FIELD`: the attribute the age is measured from. `moved_at` (default) is time in the current column; `created_at` is total age.

# Enabling on a board
1. Board *Settings* > *Power-ups* > *Developer tools* > *Enable*.
2. Paste the URL pinned to a release tag and save:
   `https://cdn.jsdelivr.net/gh/Goff-Davis-Operating-Co/kanban-scripts@v1.0/card-age-color/card-age-color.js`
3. Open the board in a private/incognito window to confirm it loads for other users.

The script runs only on boards where it is enabled. Cards that are already old turn their stage color immediately, including red and blinking.

To turn it off, remove the URL (or disable Developer tools). The board returns to normal right away.

# Testing
Test on a private board first, not a live one.

- **Real script:** enable it on the test board with the release URL, add a card, check it is green with a `0h` badge, then move it to another column and check the badge stays at `0h`.
- **Watching the colors change:** card times are set by Kanban Tool and can't be backdated. Instead, temporarily clear the URL field and paste a copy of the script into the *Javascript* box with `afterHours` replaced by minutes (e.g. 1 / 2 / 3), the badge label in minutes, and the refresh interval at 10 seconds. A card then goes green → yellow → orange → blinking red in 3 minutes, and moving it resets it to green. Restore the release URL and clear the *Javascript* box afterwards. Don't use the URL and the *Javascript* box at the same time, or the script runs twice.

# Releasing a change
1. Edit and commit the script.
2. Tag a new release (`v1.1`, ...) and push the tag.
3. Check the new URL loads: `https://cdn.jsdelivr.net/gh/Goff-Davis-Operating-Co/kanban-scripts@<tag>/card-age-color/card-age-color.js`
4. Update the URL on each board that uses the script. Boards keep running the old tag until their URL is changed.

To roll back, point the board back at the previous tag.
