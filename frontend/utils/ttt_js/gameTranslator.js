var GameTranslator = {
  translate: function (jsonGame) {
    if (jsonGame) {
      jsonGame.moveset = JSON.parse(jsonGame.moveset);
      return jsonGame;
    }
  },

  yourTurn: function (gameObj, mark) {
    if (gameObj.status === 'closed'){
      return false;
    } else {
      var numOfMoves = gameObj.moveset.length;
      if (mark === 'X' && numOfMoves % 2 === 0){
        return true;
      } else if (mark === 'O' && numOfMoves % 2 !== 0) {
        return true;
      }
      return false;
    }
  }
};

module.exports = GameTranslator;
