class EasyComputer

  def initialize(board, mark)
    @mark = mark
    @board = board
  end

  def get_move
    all_lines = @board.diagonals + @board.columns + @board.rows
    available_spaces = []

    all_lines.each do |line|
      my_marks_in_line = 0
      free_space = nil
      line.each do |pos|
        my_marks_in_line += 1 if my_mark?(pos)
        free_space = pos if @board.empty?(pos)
      end
      return free_space if free_space && my_marks_in_line == 2
      available_spaces << free_space
    end
    available_spaces.sample
  end

  def my_mark?(pos)
    @board[*pos] == @mark
  end
end
