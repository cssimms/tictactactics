var React = require('react'),
UserClientActions = require('../actions/user/UserClientActions'),
UserStore = require('../stores/UserStore');

var SignInForm = React.createClass({
  getInitialState: function() {
    return {
      user: ""
    };
  },

  componentDidMount: function() {
    UserStore.addListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      user: UserStore.current_user()
    });
  },

  handleSubmit: function (event) {
    console.log(event.target);
    var userInfo = {
      username: event.target
    };
    event.preventDefault();
    UserClientActions.signIn(userInfo);
  },

  render: function () {
    return(
      <div>
        <h3>Sign In</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input type='text' placeholder='Username'/>
          </label><br/><br/>
          <label>Password
            <input type='text' placeholder='Password'/>
          </label>
          <input type='submit' />
        </form>
      </div>
    );
  }
});

module.exports = SignInForm;
