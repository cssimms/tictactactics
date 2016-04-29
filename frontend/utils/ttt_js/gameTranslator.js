
var GameTranslator = {
  translate: function (jsonGame) {
    jsonGame.moveset = JSON.parse(jsonGame.moveset);
    return jsonGame;
  }
};


module.exports = GameTranslator;
