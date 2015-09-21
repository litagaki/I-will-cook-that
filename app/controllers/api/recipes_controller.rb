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
    @recipe = Recipe.includes(:author, :folders, reviews: [:author]).find(params[:id])
    @recipe.retrieve_review_summary
    if is_logged_in?
      @folders = @recipe.folders.where(owner_id: current_user.id)
    end
    render :show
  end

  def index
    @recipes = current_user.authored_recipes.includes(:reviews, :folders)
    @recipes.each do |recipe|
      recipe.retrieve_review_summary
    end
    render :index
  end

  def recent
    @recipes = Recipe.order(created_at: :desc).take(3)

    render :recent
  end

  private
  def recipe_params
    params.require(:recipe).
      permit(:author_id, :title, :servings, :active_time, :total_time,
      :description, :ingredients, :instructions, :photo)
  end
end
