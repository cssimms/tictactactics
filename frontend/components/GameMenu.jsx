var React = require('react');

var GameMenu = React.createClass({
  getInitialState: function() {

  },

  render: function () {
    return (
      <div>{this.state.username}</div>
    );
  }
});

module.exports = GameMenu;
