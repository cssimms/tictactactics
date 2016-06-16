
class TicTacToeNode
  attr_reader :board, :current_mark, :prev_move_pos

  def initialize(board, current_mark, prev_move_pos = nil)
    @board, @current_mark, @prev_move_pos =
      board, current_mark, prev_move_pos
  end

  def losing_node?(mark)
    if board.over?
      # A loss in this case is explicitly the case where the
      # OTHER person wins: a draw is NOT a loss. Board#won? returns
      # false in the case of a draw.
      return board.winner && board.winner != mark
    end

    if self.current_mark == mark
      # If it's the turn of the 'mark', and no matter where we
      # move the opponent can force a loss, then this is already a
      # lost node.
      self.children.all? { |node| node.losing_node?(mark) }
    else
      # If it's the opponent's turn, and they have any move where they
      # can eventually force a loss, we assume that the opponent play
      # perfectly and will take that move and eventually beat us.
      self.children.any? { |node| node.losing_node?(mark) }
    end
  end

  def winning_node?(mark)
    if board.over?
      # If the game is over and we've won, then this is a winning
      # node.
      return board.winner == mark
    end

    if self.current_mark == mark
      # If we can place any mark and eventually proceed to force a
      # win, then this is a winning node.
      self.children.any? { |node| node.winning_node?(mark) }
    else
      # If it's the opponent's turn, and no matter where they move
      # we'll still be able to force a win, then this is a winning
      # node.
      self.children.all? { |node| node.winning_node?(mark) }
    end
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    children = []

    (0..2).each do |row_idx|
      (0..2).each do |col_idx|
        pos = [row_idx, col_idx]

        # Can't move here if it's not free
        next unless board.empty?(pos)

        new_board = board.dup
        new_board[*pos] = self.current_mark
        current_mark = (self.current_mark == 'X' ? 'O' : 'X')

        children << TicTacToeNode.new(new_board, current_mark, pos)
      end
    end

    children
  end

  #Helper functions for easier debugging
  def to_s
    p @board
  end

  def inspect
    p @board
  end
end
