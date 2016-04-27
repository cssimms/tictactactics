var React = require('react'),
UserClientActions = require('../actions/user/UserClientActions'),
UserStore = require('../stores/UserStore'),
HashHistory = require('react-router').hashHistory;

var SignUpForm = React.createClass({
  componentDidMount: function() {
    UserStore.addListener(this._onChange);
  },

  _onChange: function () {
    if (UserStore.current_user()) {
      HashHistory.push('/');
    }
  },

  handleSubmit: function (event) {
    var userInfo = {
      username: event.target[0].value,
      password: event.target[1].value
    };
    UserClientActions.signUp(userInfo);
  },

//TODO update state of comp as text is typed in

  render: function () {
    return(
      <div>
        <h3>Register</h3>
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

module.exports = SignUpForm;
