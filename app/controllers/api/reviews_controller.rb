class Api::ReviewsController < ApplicationController

  def create
    @review = current_user.authored_reviews.new(review_params)
    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @review = Review.find(params[:id])
    render json: @review
  end

  def index
    @reviews = Review.find_by(recipe_id: params[:recipe_id])
    render json: @reviews
  end

  private
  def review_params
    params.require(:review).
      permit(:author_id, :recipe_id, :cook_again, :rating, :body)
  end
end
