json.recipes @recipes do |recipe|
  json.(recipe, :id, :title)
  json.photo_url asset_path(recipe.photo.url(:original))
end
