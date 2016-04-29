var React = require('react'),
GameStore = require('../stores/GamesStore'),
GameClientActions = require('../actions/game/GameClientActions'),
GameInterface = require('./GameInterface');

var CurrentGame = React.createClass({
  getInitialState: function() {
    return ({
      game: null,
      errors: null
    });
  },

  componentDidMount: function() {
    this.storeToken = GameStore.addListener(this._onChange);
    GameClientActions.fetchGame(3);
  },

  componentWillUnmount: function () {
    this.storeToken.remove();
  },

  _onChange: function () {
    this.setState({
      game: GameStore.currentGame(),
      errors: GameStore.errors()
    });
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
        <h5>{this.errors()}</h5>
        <GameInterface game={this.state.game}/>
      </div>
    );
  }
});

module.exports = CurrentGame;
