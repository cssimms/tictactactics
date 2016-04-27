var ApiUtil = require('../../utils/api_utils');

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
