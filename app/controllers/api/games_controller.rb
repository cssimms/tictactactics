class Api::GamesController < ApplicationController
  def index
    userId = game_params[:userId]

    @games = Game.where('x_id = ? OR o_id = ?', userId, userId)
  end

  def show
    @game = Game.find_by_id(params[:id])
    if @game
      render :show
    else
      @errors = @game.errors.full_messages
      render 'api/errors'
    end
  end

  def create
    @game = Game.new
    if @game.save
      render :create
    else
      @errors = @game.errors.full_messages
      render 'api/errors', status: 400
    end
  end

  def update
    @game = Game.find_by_id(params[:id])
    pos = [ game_params[:x_coord].to_i, game_params[:y_coord].to_i]
    move = {'pos'=> pos, 'mark'=> game_params[:mark]}
    if @game.make_move(move) && @game.save
      render :show
    else
      @errors = ["Invalid Move Submitted"]
      render 'api/errors', status: 400
    end
  end

  def destroy
  end

  private
  def game_params
    params.require(:game).permit(:x_coord, :y_coord, :mark, :userId)
  end
end
