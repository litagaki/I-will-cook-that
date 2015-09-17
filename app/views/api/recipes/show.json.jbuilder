json.extract!(
  @recipe,
  :author_id,
  :title,
  :description,
  :servings,
  :active_time,
  :total_time,
  :ingredients,
  :instructions
  :photo_file_name)


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
