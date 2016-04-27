var React = require('react'),
UserClientActions = require('../actions/user/UserClientActions'),
UserStore = require('../stores/UserStore'),
HashHistory = require('react-router').hashHistory;

var SignInForm = React.createClass({
  getInitialState: function() {
    return {
      username: "",
      password: "",
      errors: ""
    };
  },

  componentDidMount: function() {
    this.storeToken = UserStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
      this.storeToken.remove();
  },

  _onChange: function () {
    if (UserStore.current_user()) {
      HashHistory.push('/');
    } else {
      this.setState({
        errors: UserStore.errors()
      });
    }
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var userInfo = {
      username: this.state.username,
      password: this.state.password
    };
    UserClientActions.signIn(userInfo);
  },

  nameChange: function (event) {
    this.setState({
      username: event.target.value
    });
  },

  passwordChange: function (event) {
    this.setState({
      password: event.target.value
    });
  },

  errors: function () {
    if (this.state.errors) {
      return(
        this.state.errors.map(function(err, i){
          return <li key={i}>{err}</li>;
          })
        );
    } else {
      return;
    }
  },

  render: function () {
    return(
      <div>
        <h3>Sign In</h3>
        <h4>{this.errors()}</h4>
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input type='text'
              onChange={this.nameChange}
              placeholder='Username'/>
          </label><br/><br/>
          <label>Password
            <input type='text'
              onChange={this.passwordChange}
              placeholder='Password'/>
          </label>
          <input type='submit' />
        </form>
      </div>
    );
  }
});

module.exports = SignInForm;
