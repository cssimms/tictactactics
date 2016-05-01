var Dispatcher = require('../../dispatcher/dispatcher'),
UserConstants = require('../../constants/UserConstants');

module.exports = {
  signIn: function (res) {
    Dispatcher.dispatch({
      actionType: UserConstants.SIGN_IN,
      user: res
    });
  },

  receiveError: function (res) {
    var err;
    if (res.responseJSON){
      err = res.responseJSON['errors'];
    } else {
      err = res.statusText;
    }
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_ERROR,
      errors: res
    });
  },

  signOut: function (res) {
    Dispatcher.dispatch({
      actionType: UserConstants.SIGN_OUT,
      user: res
    });
  },

  receiveCurrentUser: function (res) {
    Dispatcher.dispatch({
      actionType: UserConstants.SIGN_IN,
      user: res
    });
  },

  receiveAllUsers: function (res) {
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_ALL_USERS,
      users: res
    });
  }
};
