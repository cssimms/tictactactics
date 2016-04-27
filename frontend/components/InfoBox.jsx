var React = require('react');

var InfoBox = React.createClass({

  render: function () {
    return (
      <ul className="info-box">
        <li className="info-box-title">TicTacTactics.com</li>
        <li className="info-box-item">App Information</li>
        <li className="info-box-item">Charlie is a good Programmer!</li>
      </ul>
    );
  }
});


module.exports = InfoBox;
