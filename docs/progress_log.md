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



TODO:
- game table header not displaying
- apply signout bug to stats page (userShow)
- when O wins, 'd' is shown as winner
- add ruby ~'2.1.2' to gemfile

styles:

hover shows mark,

backgound image - pretty!
table for games (opacity)
tabs for players/games
make a logogogogo


marks look lame... transitions?




TODO much later:
- refactor ruby ttt code.. it's amateur...  
- refactor queries in game controller

Q's :
  - fetchUserOpenGames and fetchUserClosedGames or just fetchUserGames and iterate
  client side??

  - rename component files to kneeling camel? or is the inconsistency ok?
  - all backend failures return the error: callback from ApiUtil, I've made this have status
  codes of 400, etc. It's ugly in the console. good? bad? workaround?
