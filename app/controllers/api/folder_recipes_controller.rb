class Api::FolderRecipesController < ApplicationController
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

  def index
    @folder_recipes = current_user.folder_recipes
    render json: @folder_recipes
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
