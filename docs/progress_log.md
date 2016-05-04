
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

TODO:
- apply signout bug to stats page (userShow)
- when O wins, 'd' is shown as winner ('d' is winner status for draw games)
- add ruby ~'2.1.2' to gemfile

styles:

hover shows mark,
draw results in victory message

marks look lame... transitions?

TODO much later:
- refactor ruby ttt code.. it's amateur...  
- refactor queries in game controller
