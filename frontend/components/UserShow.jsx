var React = require('react');

var UserShow = React.createClass({
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

module.exports = UserShow;
