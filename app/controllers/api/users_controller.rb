class Api::UsersController < ApplicationController

  def index
  end


#actually showing the current_user, will change to individual users
  def show
    @user = current_user
    if @user
      render: show
    else
      render: :errors status: 402
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render: 'api/users/show'
    else
      render: :errors, status: 422
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
