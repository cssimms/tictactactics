var React = require('react');

var MenuBar = React.createClass({

  render: function () {
    return (
      <ul>
        <li className="menu-bar-item">CoolStuff</li>
        <li className="menu-bar-item">MenuOptions!</li>
        <li className="menu-bar-item">more cool stuff!</li>
      </ul>
    );
  }
});


module.exports = MenuBar;
