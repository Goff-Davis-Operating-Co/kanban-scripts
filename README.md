# Kanban scripts
Custom scripts for [Kanban Tool](https://kanbantool.com) boards, loaded with the Developer Tools power-up.

## How to use them
In the board, go to *Settings* > *Power-ups*, enable *Developer Tools*, and paste the script URL. Use a URL pinned to a release tag so the board only changes when you publish a new release:

`https://cdn.jsdelivr.net/gh/Goff-Davis-Operating-Co/kanban-scripts@<tag>/<path>`

To run more than one script on a board, click the blue *+* next to the URL field to add another URL, then *Save changes*.

## Available scripts

Name | Description | URL
--- | --- | ---
[Card age color](card-age-color/) | Colors cards green, yellow, orange, then blinking red by time in their current column (18h / 36h / 54h). | `https://cdn.jsdelivr.net/gh/Goff-Davis-Operating-Co/kanban-scripts@v1.0/card-age-color/card-age-color.js`
[Task name hint](task-name-hint/) | Replaces the "give this task a name..." hint in the card form with a per-board naming convention. | `https://cdn.jsdelivr.net/gh/Goff-Davis-Operating-Co/kanban-scripts@v1.2/task-name-hint/task-name-hint.js`

## Where they're used
Board numbers are the IDs in each board's URL (`/b/<id>-...`). Checked on each board on 2026-10-16.

Board | Card age color | Task name hint
--- | --- | ---
36 | v1.0 | –
37 | v1.0 | v1.2
38 | v1.0 | –
40 | v1.0 | –
26 | not used | –

To check a board, open it and look for the age badge on the cards (card age color), or open a new card and check the name hint (task name hint). The URL field in *Developer tools* can be blank even when Developer tools shows *Enabled*.
