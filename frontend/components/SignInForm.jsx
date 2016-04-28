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
    if (UserStore.currentUser()) {
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
      <div className='userForm'>
        <h3>Sign In</h3>
        <h4>{this.errors()}</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name' className='invis'>Username</label>
            <input id='name' type='text'
              onChange={this.nameChange}
              placeholder='Username'/>
            <br/><br/>
        <label htmlFor='pass' className='invis'>Password</label>
            <input id='pass' type='text'
              onChange={this.passwordChange}
              placeholder='Password'/>
          <input type='submit' />
        </form>
      </div>
    );
  }
});

module.exports = SignInForm;
