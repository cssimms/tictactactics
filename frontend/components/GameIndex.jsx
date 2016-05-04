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

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.category !== this.props.category) {
      var currUser = this.state.currentUser;
      var searchParam;
      if (currUser){
        if (nextProps.category === 'human'){
          searchParam = 'open';
        } else if (nextProps.category === 'computer'){
          searchParam = 'comp';
        }
        GameClientActions.fetchUserGames(currUser.id, searchParam);
      }
    }
  },

  componentDidMount: function() {
    this.gameToken = GamesStore.addListener(this._onChange);
    this.userToken = UserStore.addListener(this._onChange);
    UserClientActions.fetchUsers();

    // are you logged in?
    var currUser = this.state.currentUser;
    var searchParam;
    if (currUser){
      if (this.props) {
        if (this.props.category === 'human'){
          searchParam = 'open';
        } else if (this.props.category === 'computer'){
          searchParam = 'comp';
        }
      }
      GameClientActions.fetchUserGames(currUser.id, searchParam);
    }
  },

  componentWillUnmount: function () {
    this.gameToken.remove();
    this.userToken.remove();
  },

  _onChange: function () {
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
      if (game.comp_id < 1) {
        if (oppMark === 'O'){
          opponent = UserStore.find(game.o_id);
        } else if (oppMark === 'X'){
          opponent = UserStore.find(game.x_id);
        }
      } else {
        opponent = {username: 'Easy Computer'};
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
      return <tr><td>"You don't have any games!"</td></tr>;
    } else {
      return allGames;
    }
  },

  render: function () {
    var idInfo, gameItems;
    if (this.state.currentUser){
      idInfo = <div>
        <p>{'Hello, ' + this.state.currentUser.username + '!'}</p>
        <p>{'Are you ready to play? \n Your id is: ' + this.state.currentUser.id}</p>
      </div>;
      gameItems = this.gameItems();
    }

    return (
      <div className='page-container'>
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
