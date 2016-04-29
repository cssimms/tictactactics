var Dispatcher = require('../../dispatcher/dispatcher'),
GameConstants = require('../../constants/GameConstants');

module.exports = {
  receiveGame: function (res) {
    console.log(res);
    Dispatcher.dispatch({
      actionType: GameConstants.RECEIVE_GAME,
      game: res
    });
  },

  receiveMove: function (res) {
    Dispatcher.dispatch({
      actionType: GameConstants.RECEIVE_MOVE,
      move: res
    });
  },

  receiveError: function (res) {
    console.log(res);
    Dispatcher.dispatch({
      actionType: GameConstants.MOVE_ERROR,
      erros: res
    });
  }
};
