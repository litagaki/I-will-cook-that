class Api::SessionsController < ApplicationController

  def show
    if current_user
      render :show
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

  def omniauth
    @user = User.find_or_create_from_auth_hash(auth_hash)
    login(@user)
    redirect_to root_url
  end

  def destroy
    logout
    render json: {}
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end

end
