require_relative 'board'

class Game < ActiveRecord::Base
  validates :status, :moveset, :x_id, :o_id, :winner, presence: true

  def make_move move
    # debugger
    move = JSON.parse(move)
    if self.build_game && @board.place_mark(move[:pos], move[:mark])
      self.correct_status
      true
    else
      nil
    end
  end

  # private

  def build_game
    moves = JSON.parse(self.moveset)
    @board = Board.new

    moves.each do |move|
      return nil unless @board.place_mark(move[:pos], move[:mark])
    end
  end

  def correct_status
    if @board.over? && @board.winner
      self.status = 'closed'
      self.winner = @board.winner.to_s
    elsif @board.over?
      self.status = 'closed'
      self.winner = 'd'
    end
  end
end
