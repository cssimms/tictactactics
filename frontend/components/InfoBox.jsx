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
          <img className='github-logo' src='/assets/github_logo.png'/>
          <img className='linkedin-logo' src='/assets/linkedin_logo.png'/>
        </ul>
      </div>
    );
  }
});


module.exports = InfoBox;
