var React = require('react'),
UserClientActions = require('../actions/user/UserClientActions'),
UserStore = require('../stores/UserStore'),
HashHistory = require('react-router').hashHistory;

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
    if (UserStore.current_user()) {
      HashHistory.push('/');
    }
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
    if (!this.state.errors) {
      return;
    } else {
      return(
        this.state.errors.map(function(err, i){
          return <li key={i}>{err}</li>;
        }.bind(this))
      );
    }
  },

//TODO change state of comp. while text is typed in!

  render: function () {
    return(
      <div>
        <h3>Sign In</h3>
        <h4>{this.errors()}</h4>
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
