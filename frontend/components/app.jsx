var React = require('react');

 module.exports = React.createClass({
 	render: function () {
    console.log(this.props);
 		return(
 			<div>
        TicTacTactics <br/>
 				{this.props.children}
 			</div>
 		);
 	}
 });
