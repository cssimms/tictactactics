var React = require('react');

var SignInForm = React.createClass({

  handleSubmit: function () {

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
