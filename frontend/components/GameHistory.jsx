var React = require('react'),
GameIndexItem = require('./GameIndexItem');

var GameHistory = React.createClass({

  allGames: function () {
    return this.props.games.map(function (game, i) {
      return (
        <GameIndexItem key={i} game={game} yourTurn={null} />
      );
    });
  },


  render: function () {
    return (
      <div>
        {this.allGames()}
      </div>
    );
  }
});

module.exports = GameHistory;
