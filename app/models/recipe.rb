class Recipe < ActiveRecord::Base
  has_attached_file :photo, default_url: "empty_plate.jpeg"
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/
  validates :author_id, :title, :servings, :active_time, presence: true
  validates :total_time, :ingredients, :instructions, presence: true
  validates :servings, numericality: {only_iteger: true, greater_than: 0 }

  attr_accessor :review_count, :rating_average, :percentage

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id,
    inverse_of: :authored_recipes

  has_many :reviews

  has_many :folder_recipes,
    class_name: "FolderRecipe",
    inverse_of: :recipe

  has_many :folders,
    through: :folder_recipes,
    source: :folder

  has_many :taggings,
    inverse_of: :recipe

  has_many :tags,
    through: :taggings,
    source: :tag

  def retrieve_review_summary
    if self.reviews.count > 0
      self.percentage =
        (self.reviews.to_a.select { |review|  review.cook_again }.count.to_f /
        self.reviews.to_a.count * 100).round
      self.rating_average = self.reviews.average('rating').round(1)
    end
  end

end
