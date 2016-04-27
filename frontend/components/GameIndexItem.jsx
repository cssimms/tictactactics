var React = require('react');

var GameIndexItem = React.createClass({
  getInitialState: function() {

  },

  render: function () {
    return (
      <div>{this.state.username}</div>
    );
  }
});

module.exports = GameIndexItem;
