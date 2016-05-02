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

  fetchUserGames: function (userId, param) {
    GameApiUtil.fetchUserGames(userId, param);
  },

  createGame: function (players) {
    GameApiUtil.createGame(players);
  }
};
