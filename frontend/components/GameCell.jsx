var React = require('react');

var GameCell = React.createClass({

  render: function () {
    return (
      <div className='game-cell'>
        {this.props.mark}
      </div>
    );
  }
});

module.exports = GameCell;
