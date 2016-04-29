var ApiUtil = require('../../utils/ApiUtil');

module.exports = {
  fetchGame: function (id) {
    ApiUtil.fetchGame(id);
  },

  submitMove: function (move) {
    ApiUtil.submitMove(move);
  }
};
