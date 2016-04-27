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
  }
};
