var React = require('react'),
GameIndexItem = require('./GameIndexItem'),
UserStore = require('../stores/UserStore'),
UserClientActions = require('../actions/user/UserClientActions');

var GameHistory = React.createClass({

  // all usergames and users

  allGames: function () {
      var gameArray = Object.keys(this.props.games).map(function(key){
        return this.props.games[key];
      }.bind(this));

      var wonGames = [];
      var lostGames = [];
      var tieGames = [];

      gameArray.forEach(function (game, i) {
        var mark, oppMark, opponent;

        // set marks
        if (this.props.owner.id === game.x_id) {
          mark = 'X';
          oppMark = 'O';
        } else if (this.props.owner.id === game.o_id) {
          mark = 'O';
          oppMark = 'X';
        }

        // find opponent
        if (oppMark === 'O'){
          opponent = UserStore.find(game.o_id);
        } else if (oppMark === 'X'){
          opponent = UserStore.find(game.x_id);
        }

        var gameItem = <GameIndexItem key={i}
                                      game={game}
                                      yourMark={mark}
                                      yourTurn={false}
                                      opponent={opponent} />;

        //  group based on victory
        if (game.winner === mark){
          wonGames.push(gameItem);
        } else if (game.winner === 'f'){
          tieGames.push(gameItem);
        } else {
          lostGames.push(gameItem);
        }
      }.bind(this));

      var allGames = wonGames.concat(tieGames.concat(lostGames));

      if (allGames.length < 1) {
        return <tr><td>"You don't have any games!"</td></tr>;
      } else {
        return allGames;
      }
    },


  render: function () {
    return (
      <div className='game-index-page'>
        <h4>Your Game History</h4>
        <table className='game-index-container'>
          <thead className='game-table header'>
            <tr>
              <td className='game-table header-item'>Opponent</td>
              <td className='game-table header-item'>Status</td>
              <td className='game-table header-item'>Side</td>
              <td className='game-table header-item'>Game ID</td>
            </tr>
          </thead>
          <tbody>
            {this.allGames()}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = GameHistory;
