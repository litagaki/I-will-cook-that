class Folder < ActiveRecord::Base
  validates :owner_id, :title, presence: true
  validates :title, uniqueness: {scope: :owner_id,
    message: "You can only have one folder with a given name"}

  belongs_to :owner,
    class_name: "User",
    foreign_key: :owner_id

  has_many :folder_recipes,
    class_name: "FolderRecipe",
    dependent: :destroy

  has_many :recipes,
    through: :folder_recipes,
    source: :recipe



end
