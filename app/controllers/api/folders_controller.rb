class Api:FoldersController < ApplicationController
  wrap_parameters false

  def create
    @folder = current_user.folders.new(folder_params)
    if @folder.save
      render 'show_new'
    else
      render json: @folder.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @folder = Folder.find(params[:id])
    if @folder.update(folder_params)
      render 'show_new'
    else
      render json: @folder.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @folder = Folder.find(params[:id])
    @folder.destroy!
    render json: @folder
  end

  def index
    @folders = current_user.folders.includes(recipes: [:reviews])
    render 'index'
  end

  private

  def folder_params
    params.require(:folder).permit(:owner_id, :title)
  end
end
