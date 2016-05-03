var React = require('react'),
GameHistory = require('./GameHistory'),
GameStore = require('../stores/GamesStore'),
UserStore = require('../stores/UserStore'),
CurrentUserMixin = require('../mixins/currentUser'),
UserClientActions = require('../actions/user/UserClientActions'),
GameClientActions = require('../actions/game/GameClientActions');

var UserShow = React.createClass({

  mixins: [CurrentUserMixin],

  getInitialState: function() {
    return {
      focusUser: null,
      users: [],
      userGames: []
    };
  },

  componentDidMount: function() {
    this.gameToken = GameStore.addListener(this._onChange);
    var userId = this.props.params.userId;
    UserClientActions.fetchUsers(userId);
    GameClientActions.fetchUserGames(userId, 'closed');
  },

  componentWillUnmount: function() {
    this.gameToken.remove();
  },

  _onChange: function () {
    this.setState({
      user: UserStore.find(this.props.params.userId),
      users: UserStore.allUsers(),
      userGames: GameStore.userGames()
    });
  },

  render: function () {
    return (
      <div className='home group'>
        <p className='stats'>Here are sweet stats</p>
        <GameHistory
          viewer={this.state.currentUser}
          owner={this.state.user}
          games={this.state.userGames}
          users={this.state.users} />
      </div>
    );
  }
});

module.exports = UserShow;
