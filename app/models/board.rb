class Board
  attr_reader :grid
  
  def initialize(grid = Array.new(3){Array.new(3)})
   @grid = grid
  end
  
  def [](row, col)
    @grid[row][col]
  end

  def []=(row, col, mark)
    @grid[row][col] = mark
  end
  
  def place_mark(pos, mark)
    return nil unless empty?(pos)
    self[*pos] = mark
  end
  
  def empty?(pos)
    true unless self[*pos]
  end
  
  def winner
    (diagonals + columns + rows).each do |line|
      return :X if line.all?{|pos| self[*pos] == :X}
      return :O if line.all?{|pos| self[*pos] == :O}
    end
    nil
  end
    
  def rows
    rows_array = []
    for idx in (0..2) do
      one_row = []
      for idx2 in (0..2) do
        one_row << [idx, idx2]
      end
      rows_array << one_row
    end
    rows_array
  end
  
  def diagonals
    left_diagonal = []
    right_diagonal = []
    for index in (0..2) do
      left_diagonal << [index, index]
      right_diagonal << [2-index, index]
    end
    [left_diagonal, right_diagonal]
  end
  
  
  def columns
    columns_array = []
    for idx in (0..2) do
      one_column = []
      for idx2 in (0..2) do
        one_column << [idx2,idx]
      end
      columns_array << one_column
    end
    columns_array
  end
  
  def over?
    return true if winner || !grid.any?{|row| row.any?{|x| x.nil?}}
    false
  end
end



