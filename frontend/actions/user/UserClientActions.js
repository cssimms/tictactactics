var ApiUtil = require('../../utils/ApiUtil');

module.exports ={
  signIn: function (userInfo) {
    ApiUtil.signIn(userInfo);
  },

  signUp: function (userInfo) {
    ApiUtil.signUp(userInfo);
  },

  signOut: function (userInfo) {
    ApiUtil.signOut(userInfo);
  },

  getCurrentUser: function () {
    ApiUtil.getCurrentUser();
  },

  fetchUsers: function () {
    ApiUtil.fetchUsers();
  }
};
