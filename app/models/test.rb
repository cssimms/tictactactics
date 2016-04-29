require_relative 'game'

g = Game.new


  puts g.moveset
  g.make_move([0,0],'X')
  puts g.moveset
  g.make_move([1,1],'O')
  puts g.moveset
  g.make_move([2,2],'X')
  puts g.moveset
