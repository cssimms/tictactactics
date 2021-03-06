        var React = require('react'),
      GameHistory = require('./GameHistory'),
        GameStore = require('../stores/GamesStore'),
        UserStore = require('../stores/UserStore'),
         GameMenu = require('./GameMenu'),
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
    this.userToken = UserStore.addListener(this._onChange);
    var userId = this.props.params.userId;
    UserClientActions.fetchUsers();
    GameClientActions.fetchUserGames(userId, 'closed');
  },

  componentWillUnmount: function() {
    this.gameToken.remove();
    this.userToken.remove();
  },

  componentWillReceiveProps: function(nextProps) {
    var focusUser = UserStore.find(nextProps.params.userId);
    this.setState({
      focusUser: focusUser
    });
  },

  _onChange: function () {
    this.setState({
      focusUser: UserStore.find(this.props.params.userId),
      users: UserStore.allUsers(),
      userGames: GameStore.userGames()
    });
  },

  render: function () {
    return (
      <div className='home group'>
        <GameHistory
          viewer={this.state.currentUser}
          owner={this.state.focusUser}
          games={this.state.userGames}
          users={this.state.users} />
          <GameMenu currentUser={this.state.currentUser} />
      </div>
    );
  }
});

module.exports = UserShow;
