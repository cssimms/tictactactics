var ApiUtil = require('../../utils/ApiUtil'),
Dispatcher = require('../../dispatcher/dispatcher'),
GameConstants = require('../../constants/GameConstants');

module.exports = {
  fetchGame: function (id) {
    ApiUtil.fetchGame(id);
  },

  submitMove: function (move) {
    ApiUtil.submitMove(move);
  },

  selectMove: function (move) {
    Dispatcher.dispatch({
      actionType: GameConstants.MOVE_SELECTED,
      move: move
    });
  },

  fetchUserGames: function (userId) {
    ApiUtil.fetchUserGames(userId);
  }
};
