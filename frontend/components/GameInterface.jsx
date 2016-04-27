var React = require('react');

var GameInterface = React.createClass({
  getInitialState: function() {

  },

  render: function () {
    return (
      <div>{this.state.username}</div>
    );
  }
});

module.exports = GameInterface;
