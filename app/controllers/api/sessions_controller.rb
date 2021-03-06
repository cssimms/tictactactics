class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_user_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      @errors = ['Invalid Username or Password']
      render 'api/errors', status: 401
    end
  end

  def destroy
    @user = current_user
    logout
    render 'api/users/show'
  end

end
