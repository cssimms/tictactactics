var React = require('react'),
MenuBar = require('./MenuBar'),
InfoBox = require('./InfoBox'),
GameMenu = require('./GameMenu'),
CurrentUserMixin = require('../mixins/currentUser');

module.exports = React.createClass({

	mixins: [CurrentUserMixin],

	render: function () {
		return(
			<div>
				<MenuBar />
				<div className='page-content'>
					{this.props.children}
					<InfoBox />
				</div>
			</div>
		);
	}
});
