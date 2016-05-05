var React = require('react'),
     Link = require('react-router').Link;

var InfoBox = React.createClass({

  render: function () {
    var titleStyle = {
      fontSize: '20px',
      fontWeight: 'bold',
    };
    return (
      <div className="info-box">
        <div className='info-box-mat'>
          <Link to='/'
            style={titleStyle}
            className="info-box-url">TicTacTactics</Link>
          <div className="info-box-item">Site designed and built by
          </div>
          <div className='personal-link'>Charlie Simms<br/>
            <a className='personal-logo' href="http://github.com/cssimms">
              <img className='personal-img' src='assets/personal_logo.png'/>
            </a>
          </div>
          <a className='github-logo' href="http://github.com/cssimms">
            <img className='github-black' src='assets/github_logo_black.png'/>
            <img className='github-inverse' src='assets/github_logo_inverse.png'/>
          </a>
          <a className='linkedin-logo' href="">
            <img className='linkedin-black' src='assets/linkedin_logo_black.png'/>
            <img className='linkedin-inverse' src='assets/linkedin_logo_inverse.png'/>
          </a>
        </div>
      </div>
    );
  }
});


module.exports = InfoBox;
