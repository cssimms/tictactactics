
## Day 1 (4/25/16)

- generate all frontend folders
- migrate users db / gen. user model
- generate users controller
- generate sessions controller
- further edits to proposal readme
- wrote dispatcher
- setup shell of entryfile (entry.jsx)
- wrote app.jsx component shell (mother component)
- user model prepped for auth

## Day 2 (4/26/16)

- cleaned up file names
- entry setup (tic_tac_tactics.jsx)
- finish sessions controller
- user auth complete (minus error handling)
- sign in error handling complete

## Day 3 (4/27/16)

- error handling for signup complete
- updated wireframes with new component organization
- updated component hierarchy
- so many problems with heroku
- skeleton for menubar and info box
- games table and controller generated
- fix labels on input forms
- heroku hell

## Day 4 (4/28/16)

- built game model
- worked in logic checks for valid moves
- game model/controller translate json to interact with ruby board object
- ApiUtil fetchGame request

## Day 5 (4/29/16)

- have a better attitude because it's friday
- not so far
- persistant login implemented

## Day 6 (4/30/16)

- selecting cells and submitting moves works with backend validations

## Day 7 (5/1/16)

- cleaned up GamesIndex, now displays when it's your turn.

## Day 8 (5/2/16)

- ordered gameindex
- style and position game menu
- create game modal styled
- fix mysterious json bug
- gameindex now displays opponent
- games index layout made a little better
- modal fixed width
- fix submit button
- fixed overlap of side elements
- gave gameboard different color background-color,
- menu bar button margins (for no squishy),

## Day 9 (5/3/16)
- tabs for games page
- backgound image - pretty!
- game history show a little better
- center signin/signup buttons
- add nav buttons to and from current game
- add mark selection to create game modal

## Day 10 (5/4/16)
- fix game tabs to show correct information game menu
- re-center game menu buttons
- add opponent name to currentgame
- current game naviagation on submit move fixed
- fix name display in game history
- fix current game highlighting
- correct modal length
- fixed game draw display
- correctly show draws in game history
- Tabs - look nice but give them more bottom padding

## Day 11 (5/5/16)
- logo links styled (not positioned)
- info box general styling
- fixed signout bug
- sign in/out forms tweaked
- hover over inner div in tabs header does show pointer! :)
- add game buttons to app.jsx (available everywhere)
- fix game menu bug
- info box final clean up
- fix currentmove bug - if move is selected and different game loaded,
  currentmove needs to be cleared
- style splash page

## Day 12 (5/6/16)
- favicon!
- production README




TODO:
- visuals - better colors? images in background?

- get some better seed data - half-finished games,

- better error handling for malicious move attempts
- nav bar shadow extend to the left
- center the signin/signup form on symbol
- integrate hard AI
- gameplay transitions
- main logo hover/ inverse image
- player ranks/wins?

- give tables cooler hover animation? look up css animations?

- REFACTORING

styles:
- Do not use default font. Go choose one from googlefonts.
- info box should be hidden behind a ? logo or something
- Box to left with site info needs more styling - space out links
- Main box styling on splash page needs styling - links should be spaced our more, use nicer fonts

- hover shows mark,
- marks look lame... transitions?

TODO much later:
- refactor ruby ttt code.. it's amateur...  
- refactor queries in game controller
