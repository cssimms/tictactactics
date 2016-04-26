var React = require('react'),
UserClientActions = require('../actions/user/UserClientActions');
var SignUpForm = React.createClass({

  handleSubmit: function () {

  },

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
