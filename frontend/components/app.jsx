var React = require('react'),
MenuBar = require('./MenuBar'),
InfoBox = require('./InfoBox');

module.exports = React.createClass({
	render: function () {
		return(
			<div>
				<MenuBar />
					<div className="mommaDiv group">
						<InfoBox />
		 				{this.props.children}
					</div>
			</div>
		);
	}
});
