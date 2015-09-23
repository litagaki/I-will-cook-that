json.recipes @recipes do |recipe|
  json.(
    recipe,
    :id,
    :author_id,
    :title,
    :rating_average,
    :percentage)
  json.photo_url asset_path(recipe.photo.url(:original))
  json.review_count recipe.reviews.count
  json.author recipe.author.username
  json.folders recipe.folders do |folder|
    json.(folder, :id, :title)
  end
end

json.courses Recipe::COURSES
json.diets Recipe::DIETS
json.cuisines Recipe::CUISINES
json.general_tags Recipe::GENERAL_TAGS
