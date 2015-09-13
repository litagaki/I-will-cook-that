class UsersController < ApplicationController

  def new
    @user = User.new
    render 'new'
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      # render root
    else
      render json:@user.errors
    end
  end

  def edit
    @user = current_user
    render 'edit'
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
