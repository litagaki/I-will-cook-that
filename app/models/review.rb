class Review < ActiveRecord::Base
  validates :author_id, :recipe_id, :rating, :body, presence: true
  validates :recipe_id, uniqueness: {scope: :author_id,
    message: "You can only write one review per recipe"}
  validates :cook_again, inclusion: { in: [true,false] }
  validates :rating, numericality: {
    only_integer: true,
    greater_than: 0,
    less_than: 5}
  validate :cannot_review_own_recipe

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id

  belongs_to :recipe

  def cannot_review_own_recipe
    if Recipe.find(:recipe_id).author_id == author_id
      errors.add(:author_id, "You cannot review your own recipe")
    end
  end

end
