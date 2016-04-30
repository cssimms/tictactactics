var UserStore = require('../stores/UserStore'),
UserClientActions = require('../actions/user/UserClientActions');

var CurrentUser = {
  getInitialState: function(){
		return {
			currentUser: UserStore.currentUser(),
			userErrors: UserStore.errors()
		};
	},
	componentDidMount: function(){
		UserStore.addListener(this.updateUser);
		if (!UserStore.currentUser()) {
			UserClientActions.getCurrentUser();
		}
	},
	updateUser: function(){
		this.setState({
			currentUser: UserStore.currentUser(),
			userErrors: UserStore.errors()
		});
	}

};

module.exports = CurrentUser;
