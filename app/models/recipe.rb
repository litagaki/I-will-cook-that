class Recipe < ActiveRecord::Base
  validates :author_id, :title, :servings, :active_time, presence: true
  validates :total_time, :ingredients, :instructions, presence: true
  validates :servings, numericality: {only_iteger: true, greater_than: 0 }

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id,
    inverse_of: :authored_recipes

  has_many :reviews
  
end
