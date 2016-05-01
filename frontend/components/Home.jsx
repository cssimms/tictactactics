var React = require('react'),
GameIndex = require('./GameIndex'),
 GameMenu = require('./GameMenu');

module.exports = React.createClass({
  render: function () {
    return(
      <div>
        <GameIndex />
        <GameMenu />
      </div>
    );
  }
});
