class Api::RecipesController < ApplicationController

  wrap_parameters false

  def create
    @recipe = current_user.authored_recipes.new(recipe_params)

    if @recipe.save
      render json: @recipe
    else
      render json: @recipe.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @recipe = Recipe.includes(:author, reviews: [:author]).find(params[:id])
    @recipe.retrieve_review_summary
    render :show
  end

  def index
    @recipes = current_user.authored_recipes.includes(:reviews)
    @recipes.each do |recipe|
      recipe.retrieve_review_summary
    end
    render :index
  end

  private
  def recipe_params
    params.require(:recipe).
      permit(:author_id, :title, :servings, :active_time, :total_time,
      :description, :ingredients, :instructions, :photo)
  end
end
