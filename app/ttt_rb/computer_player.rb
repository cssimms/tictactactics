class ComputerPlayer
  
  attr_accessor :mark, :name, :board
  
  def initialize(name)
    @mark = mark
    @name = name
  end
  
  def display(board)
    @board = board
  end
  
  def get_move
    return winning_move if winning_move
    [rand(2), rand(2)]
  end
  
  def winning_move
    all_lines = board.diagonals + board.columns + board.rows
    
    all_lines.each do |line|
      my_marks_in_line = 0
      free_space = nil
      line.each do |pos|
        my_marks_in_line += 1 if my_mark?(pos)
        free_space = pos if board.empty?(pos)
      end
      return free_space if free_space && my_marks_in_line == 2 
    end
    nil
  end
  
  def my_mark?(pos)
    board[*pos] == mark  
  end
end
