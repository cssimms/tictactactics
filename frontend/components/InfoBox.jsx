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
          <li className="info-box-item">Charles Simms</li>
          <li className="info-box-item">personal site link</li>
          <li className="info-box-item">github link</li>
          <li className="info-box-item">linkedin link</li>
        </ul>
      </div>
    );
  }
});


module.exports = InfoBox;
