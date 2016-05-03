        var React = require('react'),
        GameStore = require('../stores/GamesStore'),
GameClientActions = require('../actions/game/GameClientActions'),
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
    this.gameStoreToken = GameStore.addListener(this._onChange);
    GameClientActions.fetchGame(this.props.params.gameId);
  },

  componentWillUnmount: function () {
    this.gameStoreToken.remove();
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

  _onChange: function () {
    this.setState({
      game: GameStore.currentGame(),
      errors: GameStore.errors(),
      currentMove: this.appropriateMark()
    });
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
        if (victoriousMark === 'f'){
          gameMessage = "It's a Draw...";
        } else {
          gameMessage = "Congratulations " +
                            victoriousMark +
                            "! You are the winner!";
        }
      }
    }
    return gameMessage;
  },

  render: function () {
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
            Waiting for other player to move...<br/>
            <Link
              className='signon-link'
              to='/home'>Back to your Games</Link>
           </div>;
      } else {
        gameTail =
          <button className='game-button submit'
            onClick={this.submitMove}>Submit Move</button>;
      }
    }
    return (
      <div>
        <div className='game-header-message'>
          <h5>{this.errors()}</h5>
          <h5>{this.gameMessage()}</h5>
        </div>
        <GameInterface
          currTurn={this.currTurn()}
          game={this.state.game}/>
        {gameTail}
      </div>
    );
  }
});

module.exports = CurrentGame;
