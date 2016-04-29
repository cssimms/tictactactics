var React = require('react'),
GameCell = require('./GameCell');

var GameInterface = React.createClass({


  generateGrid: function () {
    var grid = [];
    var pos;
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        pos = [i,j];
        grid.push(
           {pos: pos, mark:'e'}
        );
      }
    }
    return grid;
  },

  cells: function () {
    var grid = this.generateGrid();
    if (this.props.game) {
      this.props.game.moveset.forEach(function (move) {
        for (var i = 0; i < grid.length; i++){
          if (grid[i].pos[0] === move.pos[0] &&
              grid[i].pos[1] === move.pos[1]) {
            grid[i].mark = move.mark;
          }
        }
      });
      return grid.map(function (cell, i) {
        return (
          <GameCell key={i} pos={cell.pos} mark={cell.mark} />
        );
      });
    }
  },

  render: function () {
    return (
      <div className={'game-container group'}>
        {this.cells()}
      </div>
    );
  }
});

module.exports = GameInterface;
