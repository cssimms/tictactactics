# Tic Tac Tactics

[Heroku link][heroku]

[heroku]: https://tic-tac-tactics.herokuapp.com/#/


## TTTactics Project Priorities and Features

Tic Tac Tactics is a Correspondence Tic Tac Toe interface, inspired by lichess.org. The end goal
Minimum Viable Product includes the following features.

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->
### General

- [X] User login/logout and authentication
- [X] A bug free interface, responsive and aesthetic
- [X] Interesting and interactive seed data to demonstrate the site's features
- [X] Game creation and play between two different users
- [X] Store current and past games on the database
- [X] Hosting on Heroku

### Specific Features

- [X] Create an account (MVP)
- [X] Log in / Log out, including as a Guest/Demo User (MVP)
- [X] Create, play, and complete games of TTT (MVP)
- [X] History of past games stored in player's history (MVP)
- [ ] User ranking and leaderboard page (not MVP)
- [ ] Enable data push to clients, updating play page when it becomes
the player's turn (not MVP)
- [ ] Animated gameplay (not MVP)

## Design Docs
* [View Wireframes][viewwireframes]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [DB schema][schema]

[viewwireframes]: ./docs/viewwireframes.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] migrate user and game tables
- [x] create `User` model / controller
- [x] authentication (session controller)
- [x] user signup/signin pages and components
- [x] blank landing page after signin


### Phase 2: Setup Flux Architecture / Integrate user components (2 day)

**Objective:** All Skeleton and basic routes done

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- [x] setup Webpack & Flux scaffold
- [x] write Dispatcher
- [x] setup basic userStore and gameStore
- [x] write blank skeletons for all Components
- [x] fill out basic signin and signup forms
- [x] basic styling of all current page(signin/signout/menubar/infobox)



### Phase 3: Game Model, finalize game logic (2 days)

  **Objective:** Game logic finished, model and controller up

  - [x] create `Game` model
  - [X] actually write `Game` model
  - [X] write custom game validations for valid play (backend)
  - [X] write custom game validations for valid play (frontend)
  - [X] CRU API for games (`GamesController`)
  - [X] fully test and polish js code for gameplay

### Phase 4: Game API integration (0.5)

**Objective** Successfully save and retrieve games through API

  - [X] jBuilder views for games
  - [X] seed the database with a small amount of test data
  - [X] setup `APIUtil` to interact with the API
  - [X] test out API interaction in the console

### Phase 4: Basic Aesthetics (1 day)

**Objective:** Get layout and coloring down for all existing pages.

- [X] get existing components into correct position
- [X] add basic colors & styles
- [X] finish menuBar and infoBox components

### Phase 5: CurrentGame / GameInterface Component / Page (2.5 days)

**Objective:** Connect game logic to components, then to DB

- Fill out CurrentGame, GameInterface, and GameMenu Component, enabling:
  - [X] Game CRUD (including quitting a game - DELETE)
  - [X] Making / Submitting a move
  - [X] Viewing current game with up-to-date info
  - [X] Saving game to DB (upon move submission)
- [X] Use CSS to style associated pages
- [X] Full testing, from components to db and back again

### Phase 6: Home Page (1 day)

**Objective:** Get home page fulling working and pretty

- fill out GamesIndex and GameIndexItem components, enabling:
  - [X] home page listing all current games
  - [X] linking GameIndexItem to CurrentGame, so moves can be made
- [X] Work in MenuBar, InfoBox, GamesIndex and GameMenu
- [X] Style all of above

### Phase 7: UserShow page / component (0.5 days)

**objective:** Be able to view all past games on UserShow

- [X] fill out UserShow, GameHistory, and GameHistoryItem components
- [X] Style page

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Check everything for pretty level.

- [X] tweak all styling, nitpick
- [X] seed with quality data
- [ ] Refactor HTML classes & CSS rules
- [ ] Add animations or transitions

### Bonus Features
- [ ] Integrate pusher, for immediate response when it's player's turn
- [ ] User Rankings
- [ ] Animated gameplay
- [ ] Puzzles for your TTT training
- [ ] Flush out stats for each user, win %
- [ ] Live games
- [ ] Sign in Button changes to user dropdown menu on login
