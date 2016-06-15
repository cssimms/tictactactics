require_relative 'board.rb'
require_relative 'tic_tac_toe_node.rb'
require_relative 'hard_computer.rb'
require_relative 'easy_computer.rb'

b = Board.new

until b.over?
  puts b
  puts "enter pos\n"
  pos = gets.chomp
  pos = pos.split(',').map(&:to_i)
  if !b.place_mark(pos, 'X')
    puts "OOPS TRY AGAIN"
    next
  end

  comp = HardComputer.new(b, 'O')
  # comp = EasyComputer.new(b, 'O')

  comp_move = comp.get_move
  b.place_mark(comp_move, 'O')
  puts b
end
