require_relative 'board'
require_relative 'easy_computer'
require_relative 'hard_computer'

class Game < ActiveRecord::Base
  validates :status, :moveset, :x_id, :o_id, :winner, :comp_id, presence: true

  belongs_to :x_user,
  foreign_key: :x_id,
  class_name: :User

  belongs_to :o_user,
  foreign_key: :o_id,
  class_name: :User

  def computer_first_move
    return nil if self.x_id > 0
    self.build_game
    self.computer_move('O')
  end

  def opp_mark(mark)
    mark == 'X' ? 'O' : 'X'
  end

  def make_move(move)
    if self.build_game && @board.place_mark(move['pos'], move['mark'])
      self.update_moveset(move)
      self.correct_status
      self.computer_move(move['mark']) if self.winner == 'f'
      true
    else
      nil
    end
  end

  def build_game
    moves = JSON.parse(self.moveset)
    @board = Board.new
    moves.each do |move|
      return nil unless @board.place_mark(move['pos'], move['mark'])
    end
  end

  def update_moveset(move)
    moves = JSON.parse(self.moveset)
    self.moveset = JSON.generate(moves.push(move))
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

  def computer_move(human_mark)
    case self.comp_id
    when 0
      nil
    when 1
      comp_mark = self.opp_mark(human_mark)
      comp = EasyComputer.new(@board, comp_mark)
      comp_move = comp.get_move
      @board.place_mark(comp_move, comp_mark)
      self.update_moveset({'pos'=>comp_move, 'mark'=>comp_mark})
      self.correct_status
    when 2
      comp_mark = self.opp_mark(human_mark)
      comp = HardComputer.new(@board, comp_mark)
      comp_move = comp.get_move
      @board.place_mark(comp_move, comp_mark)
      self.update_moveset({'pos'=>comp_move, 'mark'=>comp_mark})
      self.correct_status
    end
  end
end
