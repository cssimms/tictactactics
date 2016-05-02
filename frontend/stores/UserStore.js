var Store = require('flux/utils').Store,
Dispatcher = require('../dispatcher/dispatcher'),
UserConstants = require('../constants/UserConstants'),
HashHistory = require('react-router').hashHistory;


var UserStore = new Store(Dispatcher);

var _users = {};
var _currentUser, _errors = null;

UserStore.currentUser = function () {
  return _currentUser;
};

UserStore.errors = function () {
  if (Array.isArray(_errors)){
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

UserStore.allUsers = function () {
  return Object.keys(_users).map(function (key) {
    return _users[key];
  });
};

UserStore.find = function (id) {
  return _users[id];
};

UserStore.receiveAllUsers = function (users) {
  users.forEach(function (usr) {
    _users[usr.id] = usr;
  });
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
    case UserConstants.RECEIVE_ALL_USERS:
      UserStore.receiveAllUsers(payload.users);
      break;
  }
  this.__emitChange();
};



module.exports = UserStore;
