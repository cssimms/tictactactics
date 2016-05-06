require_relative 'tic_tac_toe_node'

class HardComputer

  def initialize(board, mark)
    @board = board
    @mark = mark
  end

  def get_move
    node = TicTacToeNode.new(@board, @mark)
    # The computer looks gets the array of places it can move to. We
    # shuffle the array so that the computer will play differently
    # each time (though it will always make a winning move if
    # possible, and a non-losing move if there are no winning moves).
    #
    # The shuffling is optional.
    possible_moves = node.children.shuffle

    # If any move results in a #winning_node? we want to choose that
    # one. Find picks the first of the winning moves in
    # `possible_moves`.
    node = possible_moves.find{ |child| child.winning_node?(@mark) }

    # Stop if we found a winner. `node` may be `nil` if there are no
    # winning moves to make.
    return node.prev_move_pos if node

    # Maybe there is no winning move. Then at least don't pick a
    # loser.
    node =  possible_moves.find{ |child| !child.losing_node?(@mark) }
# debugger
    return node.prev_move_pos if node

    # If the computer plays perfectly, we should never be able to
    # force it to lose. Let's raise an alarm in that case!
    raise "Wait, it looks like I'm going to lose?"
  end
end
# class ComputerPlayer
#   attr_reader :name
#
#   def initialize
#     @name = "Tandy 400"
#   end
#
#   def move(game, mark)
#     winner_move(game, mark) || random_move(game)
#   end
#
#   private
#   def winner_move(game, mark)
#     (0..2).each do |row|
#       (0..2).each do |col|
#         dup_board = game.board.dup
#         pos = [row, col]
#
#         next unless dup_board.empty?(pos)
#         dup_board[pos] = mark
#
#         return pos if dup_board.winner == mark
#       end
#     end
#
#     # no winning move
#     nil
#   end
#
#   def random_move(game)
#     board = game.board
#
#     loop do
#       range = (0..2).to_a
#       pos = [range.sample, range.sample]
#
#       return pos if board.empty?(pos)
#     end
#   end
# end
