class SessionsController < ApplicationController

  def new
    render 'new'
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      redirect_to root_url
    else
      render json: "Invalid user/password combination"
    end

  end

  def destroy
    logout
    redirect_to root_url
  end
end
