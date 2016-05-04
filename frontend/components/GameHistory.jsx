var React = require('react'),
GameIndexItem = require('./GameIndexItem'),
UserStore = require('../stores/UserStore'),
UserClientActions = require('../actions/user/UserClientActions'),
CurrentUserMixin = require('../mixins/currentUser');

//   <GameHistory
    // viewer={this.state.currentUser}
    // owner={this.state.user}
    // games={this.state.userGames}
    // users={this.state.users} />


var GameHistory = React.createClass({

  currentUserLooking: function () {
    return (this.props.viewer.id === this.props.owner.id);
  },

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
        if (game.comp_id < 1) {
          if (oppMark === 'O'){
            opponent = UserStore.find(game.o_id);
          } else if (oppMark === 'X'){
            opponent = UserStore.find(game.x_id);
          }
        } else {
          opponent = {username: 'Easy Computer'};
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

    gameTableComposition: function (games) {
      return (
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
            {games}
          </tbody>
        </table>
      );
    },



  render: function () {
    var displayTable = <p>No Games to Show</p>;
    var message = 'Waiting for Games...';
    var allRelevantGames = [];
    var currUserLooking = null;

    if (this.props.owner){
      message = <h4>{this.props.owner.username + "'s Game History"}</h4>;
      allRelevantGames = this.allGames();
      currUserLooking = this.currentUserLooking();
      if (allRelevantGames.length > 0){
        displayTable = this.gameTableComposition(allRelevantGames);
      }
      if (currUserLooking) {
        message = <h4>Your Game History</h4>;
      }
    }

    return (
      <div className='page-container'>
        {message}
        {displayTable}
      </div>
    );
  }
});

module.exports = GameHistory;
