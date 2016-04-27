var React = require('react'),
HashHistory = require('react-router').hashHistory,
UserStore = require('../stores/UserStore'),
UserClientActions = require('../actions/user/UserClientActions');


var MenuBar = React.createClass({

  getInitialState: function() {
    return {
      currentUser: null
    };
  },

  componentDidMount: function() {
    UserStore.addListener(this._onChange);
  },

  _onChange: function () {
    if (UserStore.currentUser) {
      this.setState({
        currentUser: UserStore.currentUser()
      });
    }
  },

  signIn: function (event) {
    event.preventDefault();
    HashHistory.push('/signin');
  },

  signOut: function (event) {
    event.preventDefault();
    UserClientActions.logOut(this.state.currentUser);
  },

  render: function () {
    var userButtonAction, userButtonTitle;
    if (this.state.currentUser) {
      userButtonAction = this.signOut;
      userButtonTitle = "Sign Out";
    } else {
      userButtonAction = this.signIn;
      userButtonTitle = "Sign In";
    }

    return (
      <ul className="menu-bar">
        <button onClick={userButtonAction}
          className="menu-bar-item">{userButtonTitle}</button>
        <li className="menu-bar-item">MenuOptions!</li>
        <li className="menu-bar-item">more cool stuff!</li>
      </ul>
    );
  }
});


module.exports = MenuBar;
