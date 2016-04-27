var React = require('react');

var GameIndex = React.createClass({
  getInitialState: function() {

  },

  render: function () {
    return (
      <div>{this.state.username}</div>
    );
  }
});

module.exports = GameIndex;
