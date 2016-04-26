var Store = require('flux/utils').Store,
Dispatcher = require('../dispatcher/Dispatcher'),
UserConstants = require('../constants/UserConstants');


var UserStore = new Store(Dispatcher);

var _users = {};
var _currentUser, _errors = [];

UserStore.current_user = function () {
  return _currentUser[0];
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.SIGN_IN:
        _currentUser.push(payload.user);
      break;
  }
};



module.exports = UserStore;
