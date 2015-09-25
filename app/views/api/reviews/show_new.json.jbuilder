json.(@review, :id, :recipe_id, :author_id, :cook_again, :rating, :body)
json.author current_user.username
json.recipe @review.recipe.title
json.updated_at @review.updated_at.to_date
