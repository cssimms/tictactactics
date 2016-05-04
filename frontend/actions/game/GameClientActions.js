var GameApiUtil = require('../../utils/gameApiUtil'),
Dispatcher = require('../../dispatcher/dispatcher'),
GameConstants = require('../../constants/GameConstants');

module.exports = {
  fetchGame: function (id) {
    GameApiUtil.fetchGame(id);
  },

  submitMove: function (move) {
    GameApiUtil.submitMove(move);
  },

  selectMove: function (move) {
    Dispatcher.dispatch({
      actionType: GameConstants.MOVE_SELECTED,
      move: move
    });
  },

  deSelectMove: function (move) {
    Dispatcher.dispatch({
      actionType: GameConstants.MOVE_DESELECTED,
      move: move
    });
  },

  fetchUserGames: function (userId, param) {
    GameApiUtil.fetchUserGames(userId, param);
  },

  createGame: function (gameInfo) {
    GameApiUtil.createGame(gameInfo);
  },

  clearNewGame: function () {
    Dispatcher.dispatch({
      actionType: GameConstants.CLEAR_NEW_GAME,
    });
  }
};
