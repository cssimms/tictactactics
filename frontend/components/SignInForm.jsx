var React = require('react'),
Link = require('react-router').Link,
UserClientActions = require('../actions/user/UserClientActions'),
UserStore = require('../stores/UserStore'),
HashHistory = require('react-router').hashHistory,
currentUser = require('../mixins/currentUser');

var SignInForm = React.createClass({

  mixins: [currentUser],

  getInitialState: function() {
    return {
      username: "",
      password: "",
      errors: ""
    };
  },

  componentDidMount: function() {
    this.storeToken = UserStore.addListener(this._onChange);
    this._onChange();
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
      <div className='home group'>
        <div className='page-container'>
          <h3>Sign In</h3>
          <h4>{this.errors()}</h4>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='name' className='invis'>Username</label>
              <input id='name' type='text'
                onChange={this.nameChange}
                placeholder='Username'/>
              <br/><br/>
          <label htmlFor='pass' className='invis'>Password</label>
              <input id='pass' type='password'
                onChange={this.passwordChange}
                placeholder='Password'/>
              <input type='submit' /><br/><br/>
          </form><br/>
        <Link className='signon-link' to='signup'>Not a Member?</Link>
        </div>
      </div>
    );
  }
});

module.exports = SignInForm;
