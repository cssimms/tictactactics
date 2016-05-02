var UserServerActions = require('../actions/user/UserServerActions'),
GameServerActions = require('../actions/game/GameServerActions');

var UserApiUtil = {
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
   }

 };

module.exports = UserApiUtil;
