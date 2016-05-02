var React = require('react'),
     Link = require('react-router').Link;

var InfoBox = React.createClass({

  render: function () {
    var titleStyle = {
      fontSize: '18px'
    };
    return (
      <div className="info-box">
        <ul>
          <Link to='/'
            style={titleStyle}
            className="signon-link">TicTacTactics.com</Link>
          <li className="info-box-item">App Information</li>
        </ul>
      </div>
    );
  }
});


module.exports = InfoBox;
