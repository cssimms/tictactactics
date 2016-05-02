var Dispatcher = require('../../dispatcher/dispatcher'),
GameConstants = require('../../constants/GameConstants');

module.exports = {
  receiveGame: function (res) {
    Dispatcher.dispatch({
      actionType: GameConstants.RECEIVE_GAME,
      game: res
    });
  },

  addSingleGame: function (res) {
    Dispatcher.dispatch({
      actionType: GameConstants.ADD_GAME,
      game: res
    });
  },

  receiveGames: function (res) {
    Dispatcher.dispatch({
      actionType: GameConstants.RECEIVE_GAMES,
      games: res
    });
  },

  clearGame: function () {
    Dispatcher.dispatch({
      actionType: GameConstants.RECEIVE_GAME,
      game: null
    });
  },

  receiveMove: function (res) {
    Dispatcher.dispatch({
      actionType: GameConstants.RECEIVE_MOVE,
      game: res
    });
  },

  receiveError: function (res) {
    Dispatcher.dispatch({
      actionType: GameConstants.MOVE_ERROR,
      errors: res.responseJSON['errors']
    });
  }
};
