var UserStore = require('../stores/UserStore'),
UserClientActions = require('../actions/user/UserClientActions'),
HashHistory = require('react-router').hashHistory;

var CurrentUser = {
  getInitialState: function(){
		return {
			currentUser: UserStore.currentUser(),
			userErrors: UserStore.errors()
		};
	},

	componentDidMount: function(){
		this.token = UserStore.addListener(this.updateUser);
		if (!UserStore.currentUser()) {
			UserClientActions.getCurrentUser();
		}
	},

  componentWillUnmount: function() {
    this.token.remove();
  },

	updateUser: function(){
    if (this.state.currentUser && !UserStore.currentUser()) {
      HashHistory.push('signin');
    }
		this.setState({
			currentUser: UserStore.currentUser(),
			userErrors: UserStore.errors()
		});
	}

};

module.exports = CurrentUser;
