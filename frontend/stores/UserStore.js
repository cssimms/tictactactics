var Store = require('flux/utils').Store,
Dispatcher = require('../dispatcher/Dispatcher'),
UserConstants = require('../constants/UserConstants');


var UserStore = new Store(Dispatcher);

var _users = {};
var _currentUser, _errors = [];

UserStore.current_user = function () {
  return _currentUser;
};

UserStore.errors = function () {
  return _errors;
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.SIGN_IN:
        _currentUser = payload.user;
      break;
    case UserConstants.LOGIN_ERROR:
        _errors.push(payload.errors);
      break;
  }
  this.__emitChange();
};



module.exports = UserStore;
