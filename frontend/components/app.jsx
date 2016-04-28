var React = require('react'),
MenuBar = require('./MenuBar'),
InfoBox = require('./InfoBox');

module.exports = React.createClass({
	render: function () {
		return(
			<div>
<<<<<<< HEAD
				<MenuBar />
				<InfoBox />
=======
	      <MenuBar />
	      <InfoBox />
>>>>>>> 001959d0026fdef76df0230930a0eda8bc328ec7
	 				{this.props.children}
			</div>
		);
	}
});
