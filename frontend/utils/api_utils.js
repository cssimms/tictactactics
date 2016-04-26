var ServerActions = require('../actions/serverActions.js');

 module.exports = {
   getCurrentUser: function () {
     $.ajax({
       url: "api/user",
       type: "GET",
       success: function(response){
         ServerActions.receiveCurrentUser(response);
       },
       error: function (response) {
         ServerActions.handleError(response);
       }
     });
   }


 // Example Function
 // createPokemon: function (pokemon, callback) {
 // $.ajax({
 // url: 'api/pokemon',
 // method: 'POST',
 // dataType: 'json',
 // data: {pokemon: pokemon},
 // success: function (pokemon) {
 // ServerActions.receiveSinglePokemon(pokemon);
 // callback && callback(pokemon.id);
 // }
 // });
 // }
 };
