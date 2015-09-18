class Api::FoldersController < ApplicationController
  wrap_parameters false

  def create
    @folder = current_user.folders.new(folder_params)
    if @folder.save
      render json: @folder
    else
      render json: @folder.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @folder = Folder.includes(recipes: [:reviews]).find(params[:id])
    @folder.recipes.each do |recipe|
      recipe.retrieve_review_summary
    end

    if @folder.update(folder_params)
      render 'show'
    else
      render json: @folder.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @folder = Folder.find(params[:id])
    @folder.destroy!
    render json: @folder
  end

  def show
    @folder = Folder.includes(recipes: [:reviews, :author]).find(params[:id])
    @folder.recipes.each do |recipe|
      recipe.retrieve_review_summary
    end
    render 'show'
  end

  def index
    @folders = current_user.folders.includes(recipes: [:reviews, :author])
    @folders.each do |folder|
      folder.recipes.each do |recipe|
        recipe.retrieve_review_summary
      end
    end
    render 'index'
  end

  private

  def folder_params
    params.require(:folder).permit(:owner_id, :title)
  end
end
