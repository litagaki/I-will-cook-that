class Folder < ActiveRecord::Base
  validates :owner_id, :title, presence: true
  validates :title, uniqueness: {scope: :owner_id}

  belongs_to :owner,
    className: "User",
    foreign_key: :owner_id

  has_many :folder_recipes

  has_many :recipes,
    through: :folder_recipes,
    source: :recipe

end
