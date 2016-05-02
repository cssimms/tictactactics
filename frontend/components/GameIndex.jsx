var React = require('react'),
CurrentUserMixin = require('../mixins/currentUser'),
GameTranslator = require('../utils/ttt_js/gameTranslator'),
GamesStore = require('../stores/GamesStore'),
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
    this.gameToken = GamesStore.addListener(this._onChange);
    var currUser = this.state.currentUser;
    if (currUser){
      GameClientActions.fetchUserGames(currUser.id);
    }
  },

  componentWillUnmount: function () {
    this.gameToken.remove();
  },

  _onChange: function () {
    this.updateUser();
    this.setState({
      games: GamesStore.userGames()
    });
  },

  gameItems: function () {
    var gameArray = Object.keys(this.state.games).map(function(key){
      return this.state.games[key];
    }.bind(this));

    var games =  gameArray.map(function (game, i) {
      var yourTurn = false;

      var mark;
      if (this.state.currentUser.id === game.x_id) {
        mark = 'X';
      } else if (this.state.currentUser.id === game.o_id) {
        mark = 'O';
      }

      if (GameTranslator.yourTurn(game, mark)){
        yourTurn = true;
      }
      return (
        <GameIndexItem key={i} game={game} yourTurn={yourTurn}/>
      );
    }.bind(this));

    if (games.length < 1) {
      return <h4>"You don't have any games!"</h4>;
    } else {
      return games;
    }
  },

  newGame: function () {
    hashHistory.push('/');
  },

  render: function () {
    var idInfo, gameItems;
    if (this.state.currentUser){
      idInfo = <p>{'Your id is: ' + this.state.currentUser.id}</p>;
      gameItems = this.gameItems();
    }

    return (
      <div>
        <h4>Your Games</h4>
        <h5>{idInfo}</h5><br/>
        {gameItems}
      </div>
    );
  }
});

module.exports = GameIndex;
