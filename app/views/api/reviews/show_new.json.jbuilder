json.(@review, :id, :recipe_id, :author_id, :cook_again, :rating, :body)
json.author current_user.username
json.created_at @review.created_at.to_date
