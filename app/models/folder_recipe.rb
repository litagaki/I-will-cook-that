class FolderRecipe < ActiveRecord::Base
  validates :folder_id, :recipe_id, presence: true
  validates :recipe_id, uniqueness: { scope: :folder_id}

  belongs_to :folder

  belongs_to :recipe

  has_one :owner,
    through: :folder,
    source: :owner
end
