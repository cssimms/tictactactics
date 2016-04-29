var Store = require('flux/utils').Store,
Dispatcher = require('../dispatcher/dispatcher'),
GameConstants = require('../constants/GameConstants');

var GameStore = new Store(Dispatcher);

var _games = [];
var _currentGame;

GameStore.currentGame = function () {
  return _currentGame;
};

GameStore.loadGame = function(game) {
  _currentGame = game;
};

GameStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case GameConstants.RECEIVE_GAME:
        GameStore.loadGame(payload.game);
      break;
  }
  this.__emitChange();
};

module.exports = GameStore;
