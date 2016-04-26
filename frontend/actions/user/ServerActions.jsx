var Dispatcher = require('../../dispatcher/Dispatcher'),
UserConstants = require('../../constants/UserConstants');

module.exports = {
  signIn: function (res) {
    Dispatcher.dispatch({
      actionType: UserConstants.SIGN_IN,
      user: res.user
    });
  }
};
