var React = require('react'),
CurrentUserMixin = require('../mixins/currentUser'),
GameStore = require('../stores/GamesStore'),
GameClientActions = require('../actions/game/GameClientActions'),
GameIndexItem = require('./GameIndexItem'),
hashHistory = require('react-router').hashHistory,
Modal = require('react-modal');

var GameIndex = React.createClass({

  mixins: [CurrentUserMixin],

  getInitialState: function() {
    return ({
      games: [],
      modalOpen: false
    });
  },

  componentDidMount: function() {
    this.gameToken = GameStore.addListener(this._onChange);
    var currUser = this.state.currentUser;
    if (currUser){
      GameClientActions.fetchUserGames(currUser.id);
    }
  },

  componentWillUnmount: function () {
    this.gameToken.remove();
  },

  _onChange: function () {
    this.setState({
      games: GameStore.userGames()
    });
  },

  gameItems: function () {
    var gameArray = Object.keys(this.state.games).map(function(key){
      return this.state.games[key];
    }.bind(this));

    var games =  gameArray.map(function (game, i) {
      return (
        <GameIndexItem key={i} game={game} />
      );
    });

    if (games.length < 1) {
      return "You don't have any games!";
    } else {
      return games;
    }
  },

  newGame: function () {
    hashHistory.push('/');
  },

  render: function () {

    return (
      <div>
        <h4>Your Games</h4>

        {this.gameItems()}
      </div>
    );
  }
});

module.exports = GameIndex;
