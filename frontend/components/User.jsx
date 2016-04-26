var React = require('react');

var User = React.createClass({
  getInitialState: function() {
    return {
      username: ""
    };
  },

  render: function () {
    return (
      <div>{this.state.username}</div>
    );
  }
});

module.exports = User;
