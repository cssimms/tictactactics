var React = require('react'),
UserStore = require('../stores/UserStore'),
UserIndexItem = require('./userIndexItem'),
UserClientActions = require('../actions/user/UserClientActions'),
CurrentUserMixin = require('../mixins/currentUser');

var UserIndex = React.createClass({

  mixins: [CurrentUserMixin],

  getInitialState: function() {
    return {
      users: []
    };
  },

  componentDidMount: function() {
    this.userToken = UserStore.addListener(this._onChange);
    UserClientActions.fetchUsers();
  },

  componentWillUnmount: function() {
    this.userToken.remove();
  },

  _onChange: function () {
    this.setState({
      users: UserStore.allUsers()
    });
  },

  allUsers: function () {
    if (this.state.users.length > 0) {
      return this.state.users.map(function (usr, i) {
        return <UserIndexItem key={i} user={usr}/>;
      });
    } else {
      return (<tr><td>Loading Players...</td></tr>);
    }
  },

  render: function () {
    return (
      <div className='page-container'>
        <h4>All Players</h4>
        <table className='game-index-container'>
          <thead className='game-table header'>
            <tr>
              <td className='game-table header-item'>Username</td>
              <td className='game-table header-item'>User ID</td>
            </tr>
          </thead>
          <tbody>
            {this.allUsers()}
          </tbody>
        </table>
      </div>
    );
  }

});

module.exports = UserIndex;
