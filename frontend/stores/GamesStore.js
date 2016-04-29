var Store = require('flux/utils').Store,
Dispatcher = require('../dispatcher/dispatcher'),
GameConstants = require('../constants/GameConstants');

var GameStore = new Store(Dispatcher);

var _games = [],
    _currentGame,
    _errors;

GameStore.currentGame = function () {
  return _currentGame;
};

GameStore.loadGame = function(game) {
  _currentGame = game;
  _errors = null;
};

GameStore.errors = function () {

  return _errors;
};

GameStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case GameConstants.RECEIVE_GAME:
        GameStore.loadGame(payload.game);
      break;
    case GameConstants.RECEIVE_MOVE:
        GameStore.loadGame(payload.game);
      break;
    case GameConstants.MOVE_ERROR:
        _errors = payload.errors;
      break;
  }
  this.__emitChange();
};

module.exports = GameStore;
