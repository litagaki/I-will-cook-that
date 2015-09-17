class Api::ReviewsController < ApplicationController

  wrap_parameters false

  def create
    @review = current_user.authored_reviews.new(review_params)
    if @review.save
      render 'show_new'
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.save(review_params)
      render json: @review
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy!
    render json: @review
  end

  def index
    @reviews = current_user.authored_reviews.includes(:recipe)
    render 'index'
  end

  private

  def review_params
    params.require(:review).
    permit(:author_id,:recipe_id,:rating,:cook_again,:body)
  end
end
