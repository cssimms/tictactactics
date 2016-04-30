var Store = require('flux/utils').Store,
Dispatcher = require('../dispatcher/dispatcher'),
GameConstants = require('../constants/GameConstants'),
GameTranslator = require('../utils/ttt_js/gameTranslator');

var GameStore = new Store(Dispatcher);

var _games = [],
    _currentGame,
    _currentMove,
    _errors;

GameStore.currentGame = function () {
  return _currentGame;
};

GameStore.currentMove = function () {
  return _currentMove;
};

GameStore.loadGame = function(game) {
  _currentGame = GameTranslator.translate(game);
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
    case GameConstants.MOVE_SELECTED:
        _currentMove = payload.move;
      break;
  }
  this.__emitChange();
};

module.exports = GameStore;
