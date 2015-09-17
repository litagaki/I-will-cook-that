class Recipe < ActiveRecord::Base
  has_attached_file :photo
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/
  validates :author_id, :title, :servings, :active_time, presence: true
  validates :total_time, :ingredients, :instructions, presence: true
  validates :servings, numericality: {only_iteger: true, greater_than: 0 }

  attr_accessor :rating_average, :percentage

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id,
    inverse_of: :authored_recipes

  has_many :reviews

  def retrieve_review_summary
    self.rating_average = self.reviews.average('rating').round(1)
    if self.reviews.count > 0
      self.percentage =
        (self.reviews.where(cook_again: true).count /
        self.reviews.count * 100).round
    end
  end

end
