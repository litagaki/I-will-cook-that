class Tagging < ActiveRecord::Base
  validates :tag_id, :recipe_id, presence:true
  validates :tag_id, uniqueness: { scope: :recipe_id }

  belongs_to :tag

  belongs_to :recipe
end
