        var React = require('react'),
        GameStore = require('../stores/GamesStore'),
GameClientActions = require('../actions/game/GameClientActions'),
    GameInterface = require('./GameInterface'),
    GameTranslator = require('../utils/ttt_js/gameTranslator'),
CurrentUserMixin = require('../mixins/currentUser');

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
    var submitButton;
    if (this.state.game) {
      if (this.state.game.status === 'closed'){
        submitButton = '';
      } else {
        submitButton = <button onClick={this.submitMove}>Submit Move</button>;
      }
    }
    return (
      <div>
        <h5>{this.errors()}</h5>
        <h5>{this.gameMessage()}</h5>
        <GameInterface currTurn={this.currTurn()} game={this.state.game}/>
        {submitButton}
      </div>
    );
  }
});

module.exports = CurrentGame;
