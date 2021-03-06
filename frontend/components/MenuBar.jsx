var React = require('react'),
HashHistory = require('react-router').hashHistory,
UserStore = require('../stores/UserStore'),
UserClientActions = require('../actions/user/UserClientActions'),
CurrentUserMixin = require('../mixins/currentUser'),
Link = require('react-router').Link;


var MenuBar = React.createClass({

  mixins: [CurrentUserMixin],

  getInitialState: function() {
    return {
      currentUser: null
    };
  },

  componentDidMount: function() {
    UserStore.addListener(this._onChange);
  },

  _onChange: function () {
      this.setState({
        currentUser: UserStore.currentUser()
      });
  },

  signIn: function (event) {
    event.preventDefault();
    HashHistory.push('/signin');
  },

  signOut: function (event) {
    event.preventDefault();
    UserClientActions.signOut(this.state.currentUser);
  },

  redirectPlay: function () {
    HashHistory.push('home');
  },

  redirectShow: function () {
    HashHistory.push('users/' + this.state.currentUser.id);
  },

  render: function () {
    var userButtonAction, userButtonTitle, statsButtonAction;
    if (this.state.currentUser) {
      statsButtonAction = this.redirectShow;
      userButtonAction = this.signOut;
      userButtonTitle = "Sign Out";
    } else {
      statsButtonAction = this.signIn;
      userButtonAction = this.signIn;
      userButtonTitle = "Sign In";
    }
    var gameButtonAction = this.redirectPlay;


    return (
      <ul className="menu-bar group">
        <Link to='/' >
          <img className='logo-black' src='/assets/logo.png'/>
          <img className='logo-white' src='/assets/logo_white.png'/>
        </Link>
        <button onClick={userButtonAction}
          className="menu-bar-item">{userButtonTitle}</button>
        <button onClick={gameButtonAction}
          className="menu-bar-item">Games</button>
        <button onClick={statsButtonAction}
          className='menu-bar-item'>Stats</button>
      </ul>
    );
  }
});


module.exports = MenuBar;
