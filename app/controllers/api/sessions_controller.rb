class SessionsController < ApplicationController

  def show
    if current_user
      render :shown
    else
      render json: {}
    end
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      render :show
    else
      render json: "Invalid user/password combination"
    end

  end

  def destroy
    logout
    render json: {}
  end
end
