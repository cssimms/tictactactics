require_relative 'board'

class Game < ActiveRecord::Base
  validates :status, :moveset, :x_id, :o_id, :winner, presence: true

  belongs_to :x_user,
  foreign_key: :x_id,
  class_name: :User

  belongs_to :o_user,
  foreign_key: :o_id,
  class_name: :User

  def make_move(move)
    if self.build_game && @board.place_mark(move['pos'], move['mark'])
      self.update_moveset(move)
      self.correct_status
      true
    else
      nil
    end
  end

  # private
  def update_moveset(move)
    moves = JSON.parse(self.moveset)
    self.moveset = JSON.generate(moves.push(move))
  end

  def build_game
    moves = JSON.parse(self.moveset)
    @board = Board.new
    moves.each do |move|
      return nil unless @board.place_mark(move['pos'], move['mark'])
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
