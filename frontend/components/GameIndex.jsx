        var React = require('react'),
            Modal = require('react-modal'),
      hashHistory = require('react-router').hashHistory,
 CurrentUserMixin = require('../mixins/currentUser'),
   GameTranslator = require('../utils/ttt_js/gameTranslator'),
       GamesStore = require('../stores/GamesStore'),
GameClientActions = require('../actions/game/GameClientActions'),
    GameIndexItem = require('./GameIndexItem'),
        UserStore = require('../stores/UserStore'),
UserClientActions = require('../actions/user/UserClientActions');

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
    this.userToken = UserStore.addListener(this._onChange);
    UserClientActions.fetchUsers();

    // are you logged in?
    var currUser = this.state.currentUser;
    if (currUser){
      GameClientActions.fetchUserGames(currUser.id, 'open');
    }
  },

  componentWillUnmount: function () {
    this.gameToken.remove();
    this.userToken.remove();
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

    var readyGames = [];
    var unreadyGames =  [];

    gameArray.forEach(function (game, i) {
      var mark, oppMark, opponent;

      // set marks
      if (this.state.currentUser.id === game.x_id) {
        mark = 'X';
        oppMark = 'O';
      } else if (this.state.currentUser.id === game.o_id) {
        mark = 'O';
        oppMark = 'X';
      }

      // find opponent
      if (oppMark === 'O'){
        opponent = UserStore.find(game.o_id);
      } else if (oppMark === 'X'){
        opponent = UserStore.find(game.x_id);
      }

      // determine who's turn
      var yourTurn = GameTranslator.yourTurn(game, mark);
      var gameItem = <GameIndexItem key={i}
                                    game={game}
                                    yourMark={mark}
                                    yourTurn={yourTurn}
                                    opponent={opponent} />;

      //  group based on turn
      if (yourTurn){
        readyGames.push(gameItem);
      } else {
        unreadyGames.push(gameItem);
      }
    }.bind(this));

    var allGames = readyGames.concat(unreadyGames);

    if (allGames.length < 1) {
      return <tr>"You don't have any games!"</tr>;
    } else {
      return allGames;
    }
  },

  render: function () {
    var idInfo, gameItems;
    if (this.state.currentUser){
      idInfo = <p>
        {'Hello, ' + this.state.currentUser.username +
        '! Are you ready to play? \n Your id is: ' + this.state.currentUser.id}
      </p>;
      gameItems = this.gameItems();
    }

    return (
      <div className='game-index-page'>
        <h3>{idInfo}</h3><br/>
        <table className='game-index-container'>
          <thead className='game-table header'>
            <tr>
              <td className='game-table header-item'>Opponent</td>
              <td className='game-table header-item'>Status</td>
              <td className='game-table header-item'>Side</td>
              <td className='game-table header-item'>Game ID</td>
            </tr>
          </thead>
          <tbody>
            {gameItems}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = GameIndex;
