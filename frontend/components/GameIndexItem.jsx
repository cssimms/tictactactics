var React = require('react'),
UserStore = require('../stores/UserStore'),
UserClientActions = require('../actions/user/UserClientActions'),
HashHistory = require('react-router').hashHistory;

var GameIndexItem = React.createClass({

  handleClick: function () {
    HashHistory.push('play/' + this.props.game.id);
  },

  gameInfo: function () {
    var yourTurn = ''; 
    var opponent;


    if (this.props.opponent) {
      opponent = this.props.opponent.username;
    } else {
      opponent = 'Loading Opponent Name...';
    }

    var moveMessage = "Waiting for other player's move...";
    if (this.props.yourTurn){
      yourTurn = ' your-turn';
      moveMessage = "It's your move!";
    } else if (this.props.game.status === 'closed'){
      moveMessage = this.props.game.winner + ' was the winner';
    }

    return ({
      yourTurn: yourTurn,
      opponent: opponent,
      message: moveMessage
    });
  },

  render: function () {
    var gameInfo = this.gameInfo();

    return (
      <div className={'game-item-box group' + gameInfo.yourTurn}
           onClick={this.handleClick}>

        <p className='game-summary'>{gameInfo.message}</p>
        <ul className='game-info'>
          <li className='game-info-item'>
            {"Opponent: " + gameInfo.opponent}
          </li>
          <li className='game-info-item'>
            {"You are playing as: " + this.props.yourMark}
          </li>
          <li className='game-info-item'>
            {"Game ID: " + this.props.game.id}
          </li>
          <li className='game-info-item'>
            {"Game Status: " + this.props.game.status}
          </li>
          <li className='game-info-item'>
            {"Player as X: " + this.props.game.x_id}
          </li>
          <li className='game-info-item'>
            {"Player as O: " + this.props.game.o_id}
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = GameIndexItem;
