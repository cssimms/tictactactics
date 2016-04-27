var React = require('react'),
MenuBar = require('./MenuBar'),
InfoBox = require('./InfoBox');

 module.exports = React.createClass({
 	render: function () {
 		return(
 			<div>
        TicTacTactics <br/>
      <MenuBar />
      <InfoBox />
 				{this.props.children}
 			</div>
 		);
 	}
 });
