json.array! @folders do |folder|
  json.(folder, :id, :owner_id, :title)
  json.count  folder.recipes.to_a.length

  json.recipes folder.recipes do |recipe|
    json.(recipe, :id, :title, :author_id, :rating_average, :percentage)
    json.photo_url asset_path(recipe.photo.url(:original))
    json.review_count recipe.reviews.to_a.count
    json.author recipe.author.username

    json.folders recipe.folders do |folder|
      json.(folder, :id, :title)
    end
  end
end
