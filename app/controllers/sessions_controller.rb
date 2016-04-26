class Api::SessionsController < ApplicationController

  def create

    @user = User.find_by_user_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render: "api/users/show"
    else
      render: :errors status: 422
    end
  end
end
