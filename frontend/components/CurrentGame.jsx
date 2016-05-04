        var React = require('react'),
        GameStore = require('../stores/GamesStore'),
GameClientActions = require('../actions/game/GameClientActions'),
        UserStore = require('../stores/UserStore'),
UserClientActions = require('../actions/user/UserClientActions'),
    GameInterface = require('./GameInterface'),
   GameTranslator = require('../utils/ttt_js/gameTranslator'),
 CurrentUserMixin = require('../mixins/currentUser'),
Link = require('react-router').Link;

var CurrentGame = React.createClass({

  mixins: [CurrentUserMixin],

  getInitialState: function() {
    return ({
      game: null,
      currentMove: null,
      errors: null
    });
  },

  componentDidMount: function() {
    this.gameToken = GameStore.addListener(this._onChange);
    this.userToken = UserStore.addListener(this._onChange);
    GameClientActions.fetchGame(this.props.params.gameId);
    UserClientActions.fetchUsers();
  },

  componentWillUnmount: function () {
    this.gameToken.remove();
    this.userToken.remove();
  },

  _onChange: function () {
    this.setState({
      game: GameStore.currentGame(),
      errors: GameStore.errors(),
      currentMove: this.appropriateMark(),
      opponent: this.opponent()
    });
  },

  appropriateMark: function () {
    var mark;
    if (GameStore.currentMove()){
      var move =  GameStore.currentMove();
      var userId = move.mark;
      if (this.state.game.x_id === userId){
        mark = 'X';
      } else if (this.state.game.o_id === userId){
        mark = 'O';
      }
      move.mark = mark;
      return move;
    }
    return null;
  },

  opponent: function () {
    var oppId, xId, oId, currId;
    var oppUser = null;

    if (this.state.game && this.state.currentUser){
      xId = this.state.game.x_id;
      oId = this.state.game.o_id;
      currId = this.state.currentUser.id;
      if (xId === currId){
        oppId = this.state.game.o_id;
      } else if (oId === currId){
        oppId = this.state.game.x_id;
      }

      if (oppId === 0){
        oppUser = this.computerPlayer();
      } else {
        oppUser = UserStore.find(oppId);
      }
    }
    return oppUser;
  },

  computerPlayer: function () {
    if (this.state.game.comp_id === 1){
      return ({
        username: 'The Easy Computer',
        id: 0
      });
    }
  },

  submitMove: function (event) {
    event.preventDefault();
    if (this.state.currentMove){
      GameClientActions.submitMove({
        id: this.state.game.id,
        move: this.state.currentMove
      });
    }
  },

  currTurn: function () {
    if (!this.state.game){
      return;
    }

    var currId = this.state.currentUser.id;
    var currMark;

    if (currId === this.state.game.x_id) {
      currMark = 'X';
    } else if (currId === this.state.game.o_id) {
      currMark = 'O';
    }
    return GameTranslator.yourTurn(this.state.game, currMark);
  },

  errors: function () {
    if (this.state.errors) {
      return(
        this.state.errors.map(function(err, i){
          return <li key={i}>{err}</li>;
          })
        );
    } else {
      return;
    }
  },

  gameMessage: function () {
    var gameMessage,
        victoriousMark;
    if (this.state.game) {
      if (this.state.game.status === 'closed') {
        victoriousMark = this.state.game.winner;
        if (victoriousMark === 'd'){
          gameMessage = "It's a Draw...";
        } else {
          gameMessage = "Congratulations " +
                            victoriousMark +
                            "! You are the winner!";
        }
      } else if (this.state.opponent){
        gameMessage = 'Your Opponent is ' + this.state.opponent.username;
      }
    }
    return gameMessage;
  },

  markMessage: function () {
    var mark;

    if (this.state.game && this.state.currentUser){
      if (this.state.game.x_id === this.state.currentUser.id){
        mark = 'X';
      } else if (this.state.game.o_id === this.state.currentUser.id){
        mark = 'O';
      }
    }

    return ("You're playing as " + mark);
  },

  gameTail: function () {
    var gameTail;
    if (this.state.game) {
      if (this.state.game.status === 'closed') {
        gameTail = <div className='game-tail-message'>
          <Link
            className='signon-link'
            to={'/users/' + this.state.currentUser.id}>
            Back to your Games
          </Link>
        </div>;
      } else if (!this.currTurn()) {
        gameTail =
           <div className='game-tail-message'>
             <h3>{this.markMessage()}</h3>
            Waiting for other player to move...<br/>
            <Link
              className='signon-link'
              to='/home'>Back to your Games</Link>
           </div>;
      } else {
        gameTail =
          <div className='game-tail-message'>
            <h3>{this.markMessage()}</h3>
            <button className='game-button submit'
              onClick={this.submitMove}>Submit Move</button>
          </div>;
      }
    }
    return gameTail;
  },

  render: function () {

    return (
      <div>
        <div className='game-header-message'>
          <h5>{this.errors()}</h5>
          <div>
            <div className='game-message-primary'>
              {this.gameMessage()}</div><br/>
          </div>
        </div>
        <GameInterface
          currTurn={this.currTurn()}
          game={this.state.game}/>
        {this.gameTail()}
      </div>
    );
  }
});

module.exports = CurrentGame;
