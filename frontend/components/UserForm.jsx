var React = require('react');

var UserForm = React.createClass({

  render: function () {
    var formTitle = '';

    if (this.props.formType === 'signin') {
      formTitle = 'Sign In';
    } else if (this.prop.formType === 'signup') {
      formTitle = 'Register';
    }
    return(
      <div>
        <h3>{formTitle}</h3>
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
