class SessionController < ApplicationController

  def new
    render 'new'
  end

  def create
    @user.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      #redirect to root
    else
      render json: "Invalid user/password combination"
    end

  end

  def destroy
    logout
    # redirect to root
  end
end
