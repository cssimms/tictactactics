class Api::GamesController < ApplicationController
  def index
    userId = game_params[:userId]
    search_param = game_params[:param]

    if search_param == 'open'
      @games = Game.where('x_id = ? OR o_id = ?', userId, userId).where('status = ?', search_param).where('comp_id = 0')
    elsif search_param == 'closed'
      @games = Game.where('x_id = ? OR o_id = ?', userId, userId).where('status = ?', search_param)
    elsif search_param == 'comp'
      @games = Game.where('x_id = ? OR o_id = ?', userId, userId).where('comp_id > 0').where('status = ?', 'open')
    end
    render :index
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
    comp_id = game_params[:comp_id] ? game_params[:comp_id] : 0
    @game = Game.new({x_id: game_params[:x_id],
                      o_id: game_params[:o_id],
                      comp_id: comp_id})
    @game.computer_first_move

    if @game.save
      render :show
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
    params.require(:game)
          .permit(:x_coord,   #coords for new move to be made
                  :y_coord,
                  :mark,      #mark for new move to be made
                  :userId,    #id for searching user-specifc games
                  :param,     #status for searching user-specific games
                  :x_id,      #ids for new game creation (id of 0
                  :o_id,      # implies computer opponent)
                  :comp_id)   # 0 = no comp, 1 = easy, 2 = hard
  end
end
