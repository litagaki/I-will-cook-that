class Review < ActiveRecord::Base
  validates :author_id, :recipe_id, :rating, :body, presence: true
  validates :recipe_id, uniqueness: {scope: :author_id}
  validates :cook_again, inclusion: { in: [true,false] }
  validates :rating, numericality: {
    only_integer: true,
    greater_than: 0,
    less_than: 5}

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id

  belongs_to :recipe
end
