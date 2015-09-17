class Api::RecipesController < ApplicationController

  wrap_parameters: false

  def create
    @recipe = current_user.authored_recipes.new(recipe_params)

    if @recipe.save
      render json: @recipe
    else
      render json: @recipe.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @recipe = Recipe.includes(reviews: [:author]).find(params[:id])
    render :show
  end

  def index
    @recipes = current_user.authored_recipes
    render json: @recipes
  end

  private
  def recipe_params
    params.require(:recipe).
      permit(:author_id, :title, :servings, :active_time, :total_time,
      :description, :ingredients, :instructions)
  end
end
