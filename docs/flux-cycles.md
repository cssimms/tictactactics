# Flux Cycles

## Game Cycles

### Game API Request Actions

#### From GamesIndex Component

* `fetchAllGames`
  0. invoked from `didMount`/`willReceiveProps`
  0. `GET /api/games` is called.
  0. `receiveAllGames` is set as the callback.

#### From CurrentGame/GameInterface Components

* `createGame`
  0. invoked from `CurrentGame` `didMount`
  0. `POST /api/games` is called.
  0. `receiveNewGame` is set as the callback.

* `fetchSingleGame`
  0. invoked from `CurrentGame` `didMount`/`willReceiveProps`
  0. `GET /api/game/:id` is called.
  0. `receiveSingleGame` is set as the callback.

* `saveGame`
  0. invoked from `CurrentGame` `willUnmount`
  0. `POST /api/game/:id` is called.
  0. `receiveSingleGame` is set as the callback.

* `destroyGame`
  0. invoked from quit game button `onClick`
  0. `DELETE /api/game/:id` is called.
  0. `removeGame` is set as the callback.

### Games API Response Actions

* `receiveAllGames`
  0. invoked from an API callback.
  0. `Game` store updates `_games` and emits change.

* `receiveSingleGame`
  0. invoked from an API callback.
  0. `Game` store updates `_games[id]` and emits change.

* `removeGame`
  0. invoked from an API callback.
  0. `Game` store removes `_games[id]` and emits change.

### Store Listeners

* `GamesIndex` component listens to `Game` store.
* `CurrentGame` component listens to `Game` store.
