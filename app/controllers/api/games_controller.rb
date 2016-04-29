class Api::GamesController < ApplicationController
  def index
    @games = Games.all
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
      render 'api/errors'
    end
  end

  def update
    @game = Game.find_by_id(params[:id])
    new_move = [ game_params[:x_coord].to_i, game_params[:y_coord].to_i]
    if @game.make_move(new_move, game_params[:mark]) && @game.save
      render :show
    else
      @errors = ["Invalid Move Submitted"]
      render 'api/errors'
    end
  end

  def destroy
  end

  private
  def game_params
    params.require(:game).permit(:x_coord, :y_coord, :mark)
  end
end
