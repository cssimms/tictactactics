var Dispatcher = require('../../dispatcher/Dispatcher'),
UserConstants = require('../../constants/UserConstants');

module.exports = {
  signIn: function (res) {
    Dispatcher.dispatch({
      actionType: UserConstants.SIGN_IN,
      user: res
    });
  },

  loginError: function (res) {
    Dispatcher.dispatch({
      actionType: UserConstants.LOGIN_ERROR,
      errors: res
    });
  }
};
