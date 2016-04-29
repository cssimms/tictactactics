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

    if in_bounds?(pos) && your_turn?(mark) && empty?(pos)
      self[*pos] = mark
    else
      nil
    end
  end

  def empty?(pos)
    true unless self[*pos]
  end

  def in_bounds?(pos)
    pos.first >= 0 && pos.first <= 2 && pos.last >= 0 && pos.last <= 2
  end

  def your_turn?(mark)
    empties = 0
    @grid.each do |row|
      row.each do |cell|
        empties += 1 if !cell
      end
    end

    case mark
    when 'X'
      #number of empty positions is odd, X's turn
      return true if empties.odd?
    when 'O'
      #number of empty positions is even, O's turn
      return true if empties.even?
    end
    nil
  end

  def winner
    win = nil
    (diagonals + columns + rows).each do |line|
      win = "X" if line.all?{|pos| self[*pos] == "X"}
      win = "O" if line.all?{|pos| self[*pos] == "O"}
    end
    win
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
