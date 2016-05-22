# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


guest = User.create({username: 'guest', password: 'password'})

user1 = User.create({username: 'charlie', password:'password'})
user2 = User.create({username: 'sara', password:'asdfasdf'})
user3 = User.create({username: 'emily', password:'evacat'})
user4 = User.create({username: 'megan', password:'ilovekittens'})
rob = User.create({username: 'rob', password:'asdfasdf'})
victor = User.create({username: 'victor', password:'ilovecharlie'})


Game.create({x_id: guest.id, o_id: user2.id})
Game.create({x_id: guest.id, o_id: user3.id})
Game.create({x_id: guest.id, o_id: 0, comp_id: 1})
Game.create({x_id: guest.id, o_id: 0, comp_id: 1})

rob_game = Game.create({x_id: rob.id, o_id: guest.id})
rob_game.make_move({'mark'=>'X', 'pos'=>[0,0]})
rob_game.save

victor_game = Game.create({x_id: victor.id, o_id: guest.id})
victor_game.make_move({'mark'=>'X', 'pos'=>[1,1]})
victor_game.make_move({'mark'=>'O', 'pos'=>[1,0]})
victor_game.make_move({'mark'=>'X', 'pos'=>[2,1]})
victor_game.save

comp_game1 = Game.create({x_id: 0, o_id: guest.id, comp_id: 1})
comp_game1.computer_first_move
comp_game1.save

comp_game2 = Game.create({x_id: 0, o_id: guest.id, comp_id: 1})
comp_game2.make_move({'mark'=>'X', 'pos'=>[2,2]})
comp_game2.make_move({'mark'=>'O', 'pos'=>[1,1]})
comp_game2.computer_move('O')
comp_game2.save

Game.create({x_id: guest.id, o_id: 0, comp_id: 1})
Game.create({x_id: user2.id, o_id: 0, comp_id: 1})
Game.create({x_id: user3.id, o_id: user2.id})
Game.create({x_id: user2.id, o_id: user3.id})
Game.create({x_id: user2.id, o_id: user3.id})
Game.create({x_id: user3.id, o_id: user2.id})
Game.create({x_id: victor.id, o_id: user1.id})
Game.create({x_id: user3.id, o_id: user4.id})
Game.create({x_id: rob.id, o_id: user2.id})
Game.create({x_id: rob.id, o_id: user1.id})
