var React = require('react');

var InfoBox = React.createClass({

  render: function () {
    return (
      <ul>
        <li className="info-box-item">TicTacTactics.com</li>
        <li className="info-box-item">App Information</li>
        <li className="info-box-item">Charlie is a good Programmer!</li>
      </ul>
    );
  }
});


module.exports = InfoBox;
