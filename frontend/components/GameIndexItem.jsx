var React = require('react'),
UserStore = require('../stores/UserStore'),
UserClientActions = require('../actions/user/UserClientActions'),
HashHistory = require('react-router').hashHistory;

// <GameIndexItem key={i}
//                               game={game}
//                               yourMark={mark}
//                               yourTurn={false}
//                               opponent={opponent} />


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
      if (this.props.game.winner === 'd'){
        moveMessage = 'It was a draw.';
      } else {
        moveMessage = this.props.game.winner + ' was the winner';
      }
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
      <tr className={'game-item-box group' + gameInfo.yourTurn}
           onClick={this.handleClick}>

        <td className='game-info-item'>
          {gameInfo.opponent}
        </td>
        <td className='game-info-item'>
          {gameInfo.message}
        </td>
        <td className='game-info-item'>
          {this.props.yourMark}
        </td>
        <td className='game-info-item'>
          {this.props.game.id}
        </td>
      </tr>
    );
  }
});

module.exports = GameIndexItem;
