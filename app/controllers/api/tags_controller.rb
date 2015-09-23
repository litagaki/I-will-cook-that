class Api::TagsController < ApplicationController

  wrap_parameters false

  def create
    @tag = Tag.new(tag_params)
    @tag.category = 2
    
    if @tag.save
      render json: @tag
    else
      render json: @tag.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @tags = Tag.where("category <>2")
    render json: @tags
  end

  private

  def tag_params
    params.require(:tag).permit(:label, :category)
  end
end
