class Api::UsersController < ApplicationController

  wrap_parameters false

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'show'
    else
      render json:@user.errors, status: :unprocessable_entity
    end
  end

  def show
    @user = User.find(params[:id])
    render 'show'
  end

  def update
    @user = User.find(params[:id])

    unless @user.can_reset_password?(params[:user][:old_password])
      render json: "Invalid old password", status: :unprocessable_entity
      return
    end
    
    if @user.update(user_params)
      render 'show'
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
  def user_params
    params.require(:user).
    permit(:username,:email,:password,:old_password,:confirm_password)
  end

end
