class FixRecipeImage < ActiveRecord::Migration
  def change
    remove_column :recipes, :photo_url
    add_attachment :users, :photo
  end
end
