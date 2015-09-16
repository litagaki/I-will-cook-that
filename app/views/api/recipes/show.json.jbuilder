json.extract!(
  @recipe,
  :author_id,
  :title,
  :description,
  :servings,
  :active_time,
  :total_time,
  :ingredients,
  :instructions)


json.reviews @recipe.reviews do |review|
  json.(
    review,
    :id,
    :author_id,
    :recipe_id,
    :body,
    :rating,
    :cook_again,
    :created_at)
end
