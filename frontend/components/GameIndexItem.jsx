var React = require('react'),
HashHistory = require('react-router').hashHistory;

var GameIndexItem = React.createClass({

  handleClick: function () {
    HashHistory.push('play/' + this.props.game.id);
  },

  render: function () {
    var yourTurn;
    var moveMessage = "Waiting for other player's move...";
    if (this.props.yourTurn){
      yourTurn = ' your-turn';
      moveMessage = "It's your move!";
    } else {
      yourTurn = '';
    }

    return (
      <div onClick={this.handleClick}>
        <h4>{moveMessage}</h4>
        <ul className={'gameItemList' + yourTurn}>
          <li className='gameItem'>
            {"Game ID: " + this.props.game.id}
          </li>
          <li className='gameItem'>
            {"Game Status: " + this.props.game.status}
          </li>
          <li className='gameItem'>
            {"Player as X: " + this.props.game.x_id}
          </li>
          <li className='gameItem'>
            {"Player as O: " + this.props.game.o_id}
          </li>
          <li className='gameItem'>
            {this.props.game.winner}
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = GameIndexItem;
