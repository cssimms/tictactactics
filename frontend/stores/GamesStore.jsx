var Store = require('flux/utils').Store,
Dispatcher = require('../dispatcher/Dispatcher'),
GameConstants = require('../constants/GameConstants');

var GameStore = new Store(Dispatcher);

var _games = [];
var _currentGame;

module.exports = GameStore;
