require_relative 'tic_tac_toe_node'
require 'byebug'

class HardComputer

  def initialize(board, mark)
    @board = board
    @mark = mark
  end

  def get_move
    node = TicTacToeNode.new(@board, @mark)
    # The computer gets the array of places it can move to. We
    # shuffle the array so that the computer will play differently
    # each time (though it will always make a winning move if
    # possible, and a non-losing move if there are no winning moves).
    #
    # The shuffling is optional.
    possible_moves = node.children.shuffle
    # If any move results in a #winning_node? we want to choose that
    # one. Find picks the first of the winning moves in
    # `possible_moves`.
    node = possible_moves.find { |child| child.winning_node?(@mark) }

    # Stop if we found a winner. `node` may be `nil` if there are no
    # winning moves to make.
    return node.prev_move_pos if node

    # Maybe there is no winning move. Then at least don't pick a
    # loser.
    node =  possible_moves.find { |child| !child.losing_node?(@mark) }

    return node.prev_move_pos if node
  end

end
