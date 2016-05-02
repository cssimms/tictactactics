        var React = require('react'),
        GameIndex = require('./GameIndex'),
         GameMenu = require('./GameMenu'),
 CurrentUserMixin = require('../mixins/currentUser'),
 Link = require('react-router').Link;

module.exports = React.createClass({

  mixins: [CurrentUserMixin],

  splash: function () {
    if (this.state.currentUser){
      return (
          <div>
            <GameIndex />
            <GameMenu currentUser={this.state.currentUser} />
          </div>
      );
    } else {
      return (
        <div>
          <h2>Welcome to TicTacTactics</h2>
          <Link className='signon-link' to='signin'>Click here to Sign In</Link>
          <br/>
          <Link className='signon-link' to='signup'>Or here to Sign Up</Link>
        </div>
      );
    }
  },

  render: function () {
    return (
      <div className='home group'>
        {this.splash()}
      </div>
    );
  }
});
