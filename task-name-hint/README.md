# Task name hint
Replaces the "give this task a name..." hint in the card form with your board's naming convention.

# Overview
The hint is the grey text shown in an empty card name field. It disappears as soon as you type, and it is never saved. Existing card names are not changed.

The hint text is set on each board, not in this script, so different boards can use different hints.

# Enabling on a board
1. Board *Settings* > *Power-ups* > *Developer tools* > *Enable*.
2. Paste the URL pinned to a release tag. If the board already has a script URL, click the blue *+* to add a second URL field:
   `https://cdn.jsdelivr.net/gh/Goff-Davis-Operating-Co/kanban-scripts@v1.2/task-name-hint/task-name-hint.js`
3. In the *Javascript* box, set the hint and save:
   `window.TASK_NAME_HINT = 'Client - Item - Description';`
4. Open a new card on the board and check the name field shows the new hint.

To turn it off, remove the URL and the *Javascript* line. Without `TASK_NAME_HINT` the script does nothing.
