class Tag < ActiveRecord::Base
  enum category: {
    cuisine: 0,
    course: 1,
    keyword: 2,
    dietary_restriction: 3,
    main_ingredient: 4,
    general: 5}
  validates :label, :category, presence:true
  validates :label, uniqueness: {scope: :category }

  has_many :taggings,
    inverse_of: :tag

  has_many :recipes,
    through: :taggings,
    source: :recipe
end
