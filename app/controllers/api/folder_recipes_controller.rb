class Api.FolderRecipesController < ApplicationController
  wrap_parameters false

  def create
    folder = Folder.find(params[:folder_id])
    @folder_recipe = folder.folder_recipes.new(folder_recipe_params)
    if @folder_recipe.save
      render json: @folder_recipe
    else
      render json: @folder_recipe.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @folder_recipe = FolderRecipe.find(params[:id])
    if @folder_recipe.update(folder_recipe_params)
      render json: @folder_recipe
    else
      render json: @folder_recipe.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @folder_recipe = FolderRecipe.find(params[:id])
    @folder_recipe.destroy!
    render json: @folder_recipe
  end

  private

  def folder_recipe_params
    params.require(:folder_recipe).permit(:recipe_id, :folder_id)
  end
end
