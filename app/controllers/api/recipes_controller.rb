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

    populate_recipe_info

    render :index
  end

  def recent
    @recipes = Recipe.order(created_at: :desc).take(3)

    render :recent
  end

  def search
    if !params[:query].blank?
      @recipes = Recipe.search_by_keyword(params[:query]);
      @recipes = @recipes.includes(:reviews, :folders, :author)

      populate_recipe_info

    end

    render :index
  end

  def populate_recipe_info
    filters = ["cuisine","general","diet", "course"]
    filters.each do |filter|
      instance_variable_set("@#{filter}s", Hash.new)
    end

    @recipes.each do |recipe|
      recipe.retrieve_review_summary
        filters.each do |filter|
          hash = instance_variable_get("@#{filter}s")
          filter_value = recipe.attributes["#{filter}"]
          if filter_value
            if !hash[filter_value]
              hash[filter_value] = 1
            else
              hash[filter_value] += 1
            end
          end
        end
    end
  end

  private
  def recipe_params
    params.require(:recipe).
      permit(:author_id, :title, :servings, :active_time, :total_time,
      :description, :ingredients, :instructions, :photo, :general, :cuisine,
      :diet, :course, :main_ingredient)
  end
end
