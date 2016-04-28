require_relative 'game'

g = Game.new
move1 = {pos:[0,0], mark:'X'}
move2 = {pos:[1,1], mark:'X'}
move3 = {pos:[2,2], mark:'X'}


  puts g.moveset
  g.make_move(JSON.generate(move1))
  puts g.moveset
  g.make_move(JSON.generate(move2))
  puts g.moveset
  g.make_move(JSON.generate(move3))
  puts g.moveset
