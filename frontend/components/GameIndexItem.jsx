var React = require('react'),
UserStore = require('../stores/UserStore'),
UserClientActions = require('../actions/user/UserClientActions'),
HashHistory = require('react-router').hashHistory;

var GameIndexItem = React.createClass({

  handleClick: function () {
    HashHistory.push('play/' + this.props.game.id);
  },

  render: function () {
    var yourTurn, opponent;
    var moveMessage = "Waiting for other player's move...";
    if (this.props.yourTurn){
      yourTurn = ' your-turn';
      moveMessage = "It's your move!";
    } else {
      yourTurn = '';
    }

    if (this.props.opponent) {
      opponent = this.props.opponent.username;
    } else {
      opponent = 'Loading Opponent Name...';
    }

    return (
      <div className={'gameItemList' + yourTurn} onClick={this.handleClick}>
        <h4>{moveMessage}</h4>
        <ul>
          <li className='gameItem'>
            {"Opponent: " + opponent}
          </li>
          <li className='gameItem'>
            {"You are playing as: " + this.props.yourMark}
          </li>
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
