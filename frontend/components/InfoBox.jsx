var React = require('react'),
     Link = require('react-router').Link;

var InfoBox = React.createClass({

  render: function () {
    var titleStyle = {
      fontSize: '18px'
    };
    return (
      <ul className="info-box">
        <Link to='/'
          style={titleStyle}
          className="signon-link">TicTacTactics.com</Link>
        <li className="info-box-item">App Information</li>
      </ul>
    );
  }
});


module.exports = InfoBox;
