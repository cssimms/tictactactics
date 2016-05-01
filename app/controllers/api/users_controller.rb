class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
  end

#actually showing the current_user, will change to individual users
  def get_current_user
    @user = current_user
    if @user
      render :show
    else
      render 'api/errors', status: 422
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      @errors = @user.errors.full_messages
      render 'api/errors', status: 422
    end
  end

  def update
  end

  def destroy
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
