var GameServerActions = require('../actions/game/GameServerActions');

var GameApiUtil = {

  fetchGame: function (id) {
    $.ajax({
      url: "api/games/" + id,
      type: "GET",
      success: function(response){
        GameServerActions.receiveGame(response);
      },
      error: function (response) {
        GameServerActions.receiveError(response);
      }
    });
  },

  fetchUserGames: function (id, param) {

    $.ajax({
      url: "api/games",
      type: "GET",
      data: {
        game: {
          userId: id,
          param: param
        }},
      success: function(response){
        GameServerActions.receiveGames(response);
      },
      error: function (response) {
        GameServerActions.receiveError(response);
      }
    });
  },

  submitMove: function (gameInfo) {

    $.ajax({
      url: "api/games/" + gameInfo.id,
      type: "PATCH",
      data: {game: {
        x_coord: gameInfo.move.pos[0],
        y_coord: gameInfo.move.pos[1],
        mark: gameInfo.move.mark
       }},
      success: function(response){
        GameServerActions.receiveMove(response);
      },
      error: function (response) {

        GameServerActions.receiveError(response);
      }
    });
  },

  createGame: function (players) {
    $.ajax({
      url: "api/games",
      type: "POST",
      data: {game:{
        x_id: players.x_id,
        o_id: players.o_id
      }},
      success: function(response){
        GameServerActions.addSingleGame(response);
      }
    });
  }
};



module.exports = GameApiUtil;
