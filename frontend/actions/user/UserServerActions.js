var Dispatcher = require('../../dispatcher/dispatcher'),
UserConstants = require('../../constants/UserConstants');

module.exports = {
  signIn: function (res) {
    Dispatcher.dispatch({
      actionType: UserConstants.SIGN_IN,
      user: res
    });
  },

  signInError: function (res) {
    Dispatcher.dispatch({
      actionType: UserConstants.LOGIN_ERROR,
      errors: res.responseJSON['errors']
    });
  }
};
