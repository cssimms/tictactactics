var Dispatcher = require('../../dispatcher/dispatcher'),
GameConstants = require('../../constants/GameConstants');

module.exports = {
  receiveGame: function (res) {
    Dispatcher.dispatch({
      actionType: GameConstants.RECEIVE_GAME,
      game: res
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
