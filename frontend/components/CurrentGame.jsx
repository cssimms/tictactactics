var React = require('react'),
GameStore = require('../stores/GamesStore'),
GameClientActions = require('../actions/game/GameClientActions'),
GameInterface = require('./GameInterface');

var CurrentGame = React.createClass({
  getInitialState: function() {
    return ({
      game: null
    });
  },

  componentDidMount: function() {
    GameStore.addListener(this._onChange);
    GameClientActions.fetchGame(3);
  },

  _onChange: function () {
    this.setState({
      game: GameStore.currentGame()
    });
  },

  render: function () {
    return (
      <div>
        <GameInterface game={this.state.game}/>
      </div>
    );
  }
});

module.exports = CurrentGame;
