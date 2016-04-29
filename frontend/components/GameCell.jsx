var React = require('react'),
GameClientActions = require('../actions/game/GameClientActions');

var GameCell = React.createClass({

  handleClick: function (event) {
    if (this.props.mark === 'e') {
      GameClientActions.submitMove(
        {
          id: this.props.id,
          move: {
            pos: this.props.pos,
            mark: this.props.mark,
          }
        }
      );
    }
  },

  render: function () {
    return (
      <div className='game-cell' onClick={this.handleClick}>
        {this.props.mark}
      </div>
    );
  }
});

module.exports = GameCell;
