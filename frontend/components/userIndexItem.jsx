var React = require('react'),
HashHistory = require('react-router').hashHistory;

var UserIndexItem = React.createClass({

  handleClick: function () {
    HashHistory.push('users/' + this.props.user.id);
  },

  userInfo: function () {
    var username, id;

    username = this.props.user.username;
    id = this.props.user.id;

    return ({
      username: username,
      id: id,
    });
  },

  render: function () {
    var userInfo = this.userInfo();

    return (
      <tr className={'game-item-box group'}
           onClick={this.handleClick}>
        <td className='game-info-item'>
          {userInfo.username}
        </td>
        <td className='game-info-item'>
          {userInfo.id}
        </td>
      </tr>
    );
  }
});

module.exports = UserIndexItem;
