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





TODO:

- add ruby ~'2.1.2' to gemfile

TODO much later:
- refactor ruby ttt code.. it's amateur...  
- refactor queries in game controller

Q's :
  - fetchUserOpenGames and fetchUserClosedGames or just fetchUserGames and iterate
  client side??
  - error: 'Unexpected token o in JSON at position 1' from GameTranslator line 5,
  occurs when going back to GameIndex after submitting a move

  - rename component files to kneeling camel? or is the inconsistency ok?
  - all backend failures return the error: callback from ApiUtil, I've made this have status
  codes of 400, etc. It's ugly in the console. good? bad? workaround?
