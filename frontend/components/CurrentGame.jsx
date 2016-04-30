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
    GameClientActions.fetchGame(5);
  },

  componentWillUnmount: function () {
    this.gameStoreToken.remove();
  },

  _onChange: function () {
    this.setState({
      game: GameStore.currentGame(),
      errors: GameStore.errors(),
      selected: GameStore.currentMove()
    });
  },

  submitMove: function (event) {
    event.preventDefault();
    if (this.state.selected){
      GameClientActions.submitMove({
        id: this.state.game.id,
        move: this.state.selected
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

  render: function () {
    return (
      <div>
        <GameInterface game={this.state.game}/>
        <button onClick={this.submitMove} value='Submit Move'/>
        <h5>{this.errors()}</h5>
      </div>
    );
  }
});

module.exports = CurrentGame;
