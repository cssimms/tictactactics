var React = require('react'),
UserClientActions = require('../actions/user/UserClientActions'),
UserStore = require('../stores/UserStore');

var SignInForm = React.createClass({
  getInitialState: function() {
    return {
      user: [],
      errors: []
    };
  },

  componentDidMount: function() {
    UserStore.addListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      user: UserStore.current_user(),
      errors: UserStore.errors()
    });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var userInfo = {
      username: event.target[0].value,
      password: event.target[1].value
    };
    UserClientActions.signIn(userInfo);
  },

  errors: function () {
    return(
      <div>{this.state.errors}</div>
    );
  },

//TODO change state of comp. while text is typed in!

  render: function () {
    return(
      <div>
        <h3>Sign In</h3>
        <h4>{this.state.errors}</h4>
        <h5>{this.state.user.username}</h5>
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
