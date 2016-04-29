var React = require('react');

var GameInterface = React.createClass({


  render: function () {
    var moves;
    if (this.props.game) {
      moves = this.props.game.moveset;
    } else {
      moves = "Loading Game";
    }
    return (
      <div>
        {moves}
      </div>
    );
  }
});

module.exports = GameInterface;
