var React = require('react'),
MenuBar = require('./MenuBar'),
InfoBox = require('./InfoBox');

module.exports = React.createClass({
	render: function () {
		return(
			<div>
	      <MenuBar />
	      <InfoBox />
	 				{this.props.children}
			</div>
		);
	}
});
