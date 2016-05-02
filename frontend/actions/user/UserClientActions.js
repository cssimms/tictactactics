var UserApiUtil = require('../../utils/userApiUtil');

module.exports ={
  signIn: function (userInfo) {
    UserApiUtil.signIn(userInfo);
  },

  signUp: function (userInfo) {
    UserApiUtil.signUp(userInfo);
  },

  signOut: function (userInfo) {
    UserApiUtil.signOut(userInfo);
  },

  getCurrentUser: function () {
    UserApiUtil.getCurrentUser();
  },

  fetchUsers: function () {
    UserApiUtil.fetchUsers();
  }
};
