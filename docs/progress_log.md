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


TODO:
- add ruby ~'2.1.2' to gemfile
- need to pass CurrentGame and id in props, so redirect(nested)
under.....user show? not sure

TODO much later:
- refactor ruby ttt code.. it's amateur...  

Q's :
  - rename component files to kneeling camel? or is the inconsistency ok?
  - is it better for game move checks to use falsey return values or throw and catch errors?
  - write my move validations using validate rails method??
