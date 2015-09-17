json.array! @recipes do |recipe|
  json.(
    recipe,
    :id,
    :author_id,
    :title,
    :rating_average,
    :percentage)
  json.photo_url asset_path(recipe.photo.url(:original))
  json.review_count recipe.reviews.count
  json.author current_user.username
end
