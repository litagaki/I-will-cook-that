json.extract!(@folder, :id, :title, :owner_id)

json.recipes @folder.recipes do |recipe|
  json.(recipe, :id, :title, :author_id, :rating_average, :percentage)
  json.photo_url asset_path(recipe.photo.url(:original))
  json.review_count recipe.reviews.count
  json.author recipe.author.username
end
