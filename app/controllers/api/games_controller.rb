class Api::GamesController < ApplicationController
  def index
    @games = Games.all
  end

  def show
    @game = Game.find_by_id(params[:id])
    if @game
      render
    else
      @errors = @game.errors.full_messages
      render 'api/errors'
    end
  end

  def create
    @game = Game.new
    if @game.save
      render
    else
      @errors = @game.errors.full_messages
      render 'api/errors'
    end
  end

  def update
    @game = Game.find_by_id(params[:id])
    new_move = game_params[:game][:new_move]

    if @game.make_move(new_move) && @game.save
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
    params.require(:game).permit(:moveset, :x_id, :o_id, :new_move)
  end
end
