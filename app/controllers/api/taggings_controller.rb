class Api::TaggingsController < ApplicationController

  wrap_parameters false

  def create
    @tagging = Tagging.new(tagging_params)
    if @tagging.save
      render json: @tagging
    else
      render json: @tagging.errors.full_messages
    end
  end

  def index
    @taggings = Recipe.find(params[:recipe_id]).taggings
    render json: @taggings
  end

  private
  def tagging_params
    params.require(:tagging).permit(:tag_id, :recipe_id)
  end
end
