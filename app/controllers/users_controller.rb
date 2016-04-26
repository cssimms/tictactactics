class Api::UsersController < ApplicationController

  def index
  end

  def show
    @user = current_user
    if @user
      render: #something
    else
      render: json: @user.errors.full_messages status: 402
    end
  end

  def create
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
