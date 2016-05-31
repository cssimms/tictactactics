var React = require('react'),
     Link = require('react-router').Link;

var InfoBox = React.createClass({

  render: function () {
    var titleStyle = {
      fontSize: '20px',
      fontWeight: 'bold',
    };
    return (
      <div>
        <i className="fa fa-question fa-3x" aria-hidden="true"></i>
        <div className="info-box">
          <div className='info-box-mat'>
            <Link to='/'
              style={titleStyle}
              className="info-box-url">TicTacTactics</Link>
            <div className="info-box-item">Site designed and built by
            </div>
            <a href="http://github.com/cssimms">
              <div onClick={this.redirectToPersonalPage}
                 className='personal-link'>Charles Simms<br/>
               <div className='personal-logo'>
                  <img className='personal-img' src='assets/personal_logo.png'/>
              </div>
              </div>
            </a>
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
      </div>
    );
  }
});


module.exports = InfoBox;
