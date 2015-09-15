class Recipe < ActiveRecord::Base
  validates :author_id, :title, :servings, :active_time, presence: true
  validates :total_time, :ingredients, :instructions, presence: true

  belongs_to: :author,
    class_name: "User",
    foreign_key: :author_id,
    inverse_of: :authored_recipes
end
