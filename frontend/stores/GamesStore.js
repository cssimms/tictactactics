var Store = require('flux/utils').Store,
Dispatcher = require('../dispatcher/dispatcher'),
GameConstants = require('../constants/GameConstants'),
GameTranslator = require('../utils/ttt_js/gameTranslator');

var GameStore = new Store(Dispatcher);

var _games = [],
    _newGame = null,
    _currentGame,
    _currentMove,
    _errors;

GameStore.currentGame = function () {
  return _currentGame;
};

GameStore.currentMove = function () {
  return _currentMove;
};

GameStore.userGames = function () {
  return _games;
};

GameStore.newGame = function () {
  return _newGame;
};

GameStore.loadGame = function(game) {
  _currentGame = GameTranslator.translate(game);
  _errors = null;
  _currentMove = null;
};

GameStore.loadNewGame = function (game) {
  _newGame = game;
};

GameStore.clearNewGame = function () {
  _newGame = null;
};

GameStore.loadGames = function (games) {
  _games = Object.keys(games).map(function (key) {
    return GameTranslator.translate(games[key]);
  });
};

GameStore.addGame = function (game) {
  game = GameTranslator.translate(game);
  _games[game.id] = game;
};

GameStore.errors = function () {
  return _errors;
};

GameStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case GameConstants.RECEIVE_GAME:
        GameStore.loadGame(payload.game);
      break;
    case GameConstants.ADD_GAME:
        GameStore.addGame(payload.game);
      break;
    case GameConstants.ADD_NEW_GAME:
        GameStore.loadNewGame(payload.game);
      break;
    case GameConstants.CLEAR_NEW_GAME:
        GameStore.clearNewGame();
      break;
    case GameConstants.RECEIVE_GAMES:
        GameStore.loadGames(payload.games);
      break;
    case GameConstants.RECEIVE_MOVE:
        GameStore.loadGame(payload.game);
      break;
    case GameConstants.MOVE_ERROR:
        _errors = payload.errors;
      break;
    case GameConstants.MOVE_SELECTED:
    // debugger
        _currentMove = payload.move;
      break;
    case GameConstants.MOVE_DESELECTED:
        _currentMove = null;
      break;
  }
  this.__emitChange();
};

module.exports = GameStore;
