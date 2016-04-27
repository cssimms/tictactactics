var Store = require('flux/utils').Store,
Dispatcher = require('../dispatcher/Dispatcher'),
UserConstants = require('../constants/UserConstants');


var UserStore = new Store(Dispatcher);

var _users = {};
var _currentUser, _errors = null;

UserStore.current_user = function () {
  return _currentUser;
};

UserStore.errors = function () {
  if (_errors){
    return _errors.slice();
  } else {
    return null;
  }
};

UserStore.signIn = function (user) {
  _currentUser = user;
  _errors = null;
};

UserStore.signOut = function (user) {
  _currentUser = null;
  _errors = null;
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.SIGN_IN:
        UserStore.signIn(payload.user);
      break;
    case UserConstants.SIGN_OUT:
        UserStore.signOut(payload.user);
      break;
    case UserConstants.LOGIN_ERROR:
        _errors = payload.errors;
      break;
  }
  this.__emitChange();
};



module.exports = UserStore;
