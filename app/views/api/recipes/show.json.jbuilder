json.extract!(
  @recipe,
  :author_id,
  :title,
  :description,
  :servings,
  :active_time,
  :total_time,
  :ingredients,
  :instructions,
  :rating_average,
  :percentage)
json.author @recipe.author.username

json.photo_url asset_path(@recipe.photo.url(:original))


json.reviews @recipe.reviews do |review|
  json.(
    review,
    :id,
    :author_id,
    :recipe_id,
    :body,
    :rating,
    :cook_again)
  json.created_at review.created_at.to_date
  json.author review.author.username
end
