json.recipes @recipes do |recipe|
  json.(
    recipe,
    :id,
    :author_id,
    :title,
    :course,
    :cuisine,
    :diet,
    :general,
    :rating_average,
    :percentage)
  json.photo_url asset_path(recipe.photo.url(:original))
  json.review_count recipe.reviews.count
  json.author recipe.author.username
  json.folders recipe.folders do |folder|
    json.(folder, :id, :title)
  end
end

json.course_values Recipe::COURSES
json.diet_values Recipe::DIETS
json.cuisine_values Recipe::CUISINES
json.general_values Recipe::GENERAL_TAGS

json.courses @courses
json.diets @diets
json.general_tags @generals
json.cuisines @cuisines
