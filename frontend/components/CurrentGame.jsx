var React = require('react'),
GameStore = require('../stores/GamesStore'),
GameClientActions = require('../actions/game/GameClientActions'),
GameInterface = require('./GameInterface'),
UserStore = require('../stores/UserStore');

var CurrentGame = React.createClass({
  getInitialState: function() {
    return ({
      game: null,
      currentMove: null,
      errors: null
    });
  },

  componentDidMount: function() {
    this.gameStoreToken = GameStore.addListener(this._onChange);
    GameClientActions.fetchGame(1);
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

  endGameMessage: function () {
    var endGameMessage,
        victoriousMark;
    if (this.state.game) {
      if (this.state.game.status === 'closed') {
        victoriousMark = this.state.game.winner;
        if (victoriousMark === 'f'){
          endGameMessage = "It's a Draw...";
        } else {
          endGameMessage = "Congradulations " +
                            victoriousMark +
                            "! You are the winner!";
        }
      }
    }
    return endGameMessage;
  },

  render: function () {
    return (
      <div>
        <GameInterface game={this.state.game}/>
        <h5>{this.errors()}</h5>
        <h5>{this.endGameMessage()}</h5>
        <button onClick={this.submitMove}>Submit Move</button>
      </div>
    );
  }
});

module.exports = CurrentGame;
