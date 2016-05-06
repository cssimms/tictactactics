        var React = require('react'),
        GameIndex = require('./GameIndex'),
         GameMenu = require('./GameMenu'),
        UserIndex = require('./userIndex'),
UserClientActions = require('../actions/user/UserClientActions'),
             Tabs = require('./tabs'),
 CurrentUserMixin = require('../mixins/currentUser'),
 Link = require('react-router').Link,
 HashHistory = require('react-router').hashHistory;

module.exports = React.createClass({

  mixins: [CurrentUserMixin],

  entry: function () {
    if (this.state.currentUser){
      return (
          <div className='tabs-header-container'>
            <Tabs panes={
                [{
                    title: 'Human Games',
                    content: <GameIndex category='human'/>
                },{
                    title: 'Computer Games',
                    content: <GameIndex category='computer'/>
                },{
                    title: 'Players',
                    content: <UserIndex />
                }]
            } />
            <GameMenu currentUser={this.state.currentUser} />
          </div>
      );
    } else {
      return (this.splash());
    }
  },

  toSignIn: function () {
    HashHistory.push('signin');
  },

  toSignUp: function () {
    HashHistory.push('signup');
  },

  guestSignIn: function () {
    UserClientActions.signIn({
      username: 'guest',
      password: 'password'
    });
  },

  splash: function () {
    return (
        <div className='page-container'>
          <div className='splash'>
            <img className='splash-title' src='assets/logo.png'></img>
            <br/><br/>
            <p className='splash-text'>
            TTT is a correspondance WebApp based off of Lichess.org,
            with a Tic-Tac-Toe spin. For more information,
            check out my GitHub on the left.
            Enjoy!</p>
            <br/><br/>
            <button
              className='sign-button entry'
              onClick={this.toSignIn}>Click here to Sign In</button>
            <br/><br/>
            <button
              className='sign-button entry'
              onClick={this.guestSignIn}>Here to Sign in as a Guest</button>
            <br/><br/>
            <button
              className='sign-button entry'
              onClick={this.toSignUp}>Or here to Sign Up</button>
          </div>
        </div>
    );
  },

  render: function () {
    return (
      <div className='home group'>
        {this.entry()}
      </div>
    );
  }
});
