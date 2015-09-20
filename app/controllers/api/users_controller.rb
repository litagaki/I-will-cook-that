class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'show'
    else
      render json:@user.errors
    end
  end

  def show
    @user = User.find(params[:id])
    render 'show'
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render 'show'
    else
      render json: @user.errors
    end
  end

  private
  def user_params
    params.require(:user).
    permit(:username,:email,:password,:old_password,:confirm_password)
  end
end
