var Dispatcher = require('../../dispatcher/dispatcher'),
UserConstants = require('../../constants/UserConstants');

module.exports = {
  signIn: function (res) {
    Dispatcher.dispatch({
      actionType: UserConstants.SIGN_IN,
      user: res
    });
  },

  receiveCurrentUser: function (res) {
    Dispatcher.dispatch({
      actionType: UserConstants.SIGN_IN,
      user: res
    });
  },

  signInError: function (res) {
    var err;
    if (res.responseJSON){
      err = res.responseJSON['errors'];
    } else {
      err = res.statusText;
    }
    Dispatcher.dispatch({
      actionType: UserConstants.LOGIN_ERROR,
      errors: res
    });
  },

  signOut: function (res) {
    Dispatcher.dispatch({
      actionType: UserConstants.SIGN_OUT,
      user: res
    });
  }
};
