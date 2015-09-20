json.extract!(user, :id, :username, :email)
json.created_at user.created_at.to_date
