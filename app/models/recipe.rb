class Recipe < ActiveRecord::Base
  COURSES = [ "Appetizer", "Breakfast", "Dessert", "Main", "Salad",
    "Side", "Snack", "Soup"]
  DIETS = ["Kosher", "Vegetarian","Vegan", "Gluten-Free", "Low-Sugar",
    "Low-Fat", "Low-Carb"]
  CUISINES = ["African", "American", "Asian", "Cajun", "Chinese", "French",
    "Fusion", "Indian", "Italian", "Japanese", "Jewish", "Latin American",
    "Mediterranean", "Mexican", "Middle Eastern", "Russian", "Spanish",
    "Southwestern"]
  GENERAL_TAGS = ["Quick & Easy", "Kid-Friendly", "Entertaining"]
  has_attached_file :photo, default_url: "empty_plate.jpeg"
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/
  validates :author_id, :title, :servings, :active_time, presence: true
  validates :total_time, :ingredients, :instructions, presence: true
  validates :servings, numericality: {only_iteger: true, greater_than: 0 }
  validates :course, inclusion:
    { in: COURSES, allow_nil: true, allow_blank: true }
  validates :diet, inclusion:
    { in: DIETS, allow_nil: true, allow_blank: true }
  validates :general, inclusion:
    { in: GENERAL_TAGS, allow_nil: true, allow_blank: true }
  validates :cuisine, inclusion:
    { in: CUISINES, allow_nil: true, allow_blank: true }

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

  include PgSearch

  pg_search_scope :search_by_keyword,
    against: [:title, :course, :cuisine, :diet, :main_ingredient, :general]

  def retrieve_review_summary
    if self.reviews.count > 0
      self.percentage =
        (self.reviews.to_a.select { |review|  review.cook_again }.count.to_f /
        self.reviews.to_a.count * 100).round
      self.rating_average = self.reviews.average('rating').round(1)
    end
  end

end
