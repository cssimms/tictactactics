var React = require('react');

 module.exports = React.createClass({
 	render: function () {
 		return(
 			<div>
        TicTacTactics <br/>
 				{this.props.children}
 			</div>
 		);
 	}
 });
