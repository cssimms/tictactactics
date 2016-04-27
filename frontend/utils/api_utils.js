var UserServerActions = require('../actions/user/UserServerActions');

 module.exports = {
   getCurrentUser: function () {
     $.ajax({
       url: "api/users",
       type: "GET",
       success: function(response){
         UserServerActions.receiveCurrentUser(response);
       },
       error: function (response) {
         UserServerActions.handleError(response);
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
         UserServerActions.signInError(response);
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
       }
     });
   },

   signOut: function (userInfo) {
     $.ajax({
       url: "api/session",
       type: "DELETE",
       success: function(response){
         UserServerActions.signOut(response);
       }
     });
   }

 };
