var ServerActions = require('../actions/user/ServerActions');

 module.exports = {
   getCurrentUser: function () {
     $.ajax({
       url: "api/user",
       type: "GET",
       success: function(response){
         ServerActions.receiveCurrentUser(response);
       },
       error: function (response) {
         ServerActions.handleError(response);
       }
     });
   },

   signIn: function () {
     $.ajax({
       url: "api/session",
       type: "POST",
       success: function(response){
         ServerActions.signIn(response);
       }
     });
   }



 };
