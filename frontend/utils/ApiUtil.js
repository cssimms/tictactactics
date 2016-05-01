var UserServerActions = require('../actions/user/UserServerActions'),
GameServerActions = require('../actions/game/GameServerActions');



var ApiUtil = {
   getCurrentUser: function () {
     $.ajax({
       url: "api/user/current_user",
       type: "GET",
       success: function(response){
         UserServerActions.receiveCurrentUser(response);
       },
       error: function (response) {
         UserServerActions.receiveError(response);
       }
     });
   },

   fetchUsers: function () {
     $.ajax({
       url: "api/users",
       type: "GET",
       success: function(response){
         UserServerActions.receiveAllUsers(response);
       },
       error: function (response) {
         UserServerActions.receiveError(response);
       }
     });
   },

   signIn: function (userInfo) {
     $.ajax({
       url: "api/session",
       type: "POST",
       data: {user: userInfo},
       success: function(response){
         UserServerActions.signIn(response);
       },
       error: function (response) {
         UserServerActions.receiveError(response);
       }
     });
   },

   signUp: function (userInfo) {
     $.ajax({
       url: "api/users",
       type: "POST",
       data: {user: userInfo},
       success: function(response){
         UserServerActions.signIn(response);
       },
       error: function (response) {
         UserServerActions.receiveError(response);
       }
     });
   },

   signOut: function (userInfo) {
     $.ajax({
       url: "api/session",
       type: "DELETE",
       success: function(response){
         UserServerActions.signOut(response);
         GameServerActions.clearGame();
       }
     });
   },

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

   fetchUserGames: function (id) {
     $.ajax({
       url: "api/games",
       type: "GET",
       data: {
         game: {
           userId: id
         }},
       success: function(response){
         GameServerActions.receiveGames(response);
       },
       error: function (response) {
         GameServerActions.receiveError(response) ;
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
   }

 };


window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
