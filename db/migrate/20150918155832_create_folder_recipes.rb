class CreateFolderRecipes < ActiveRecord::Migration
  def change
    create_table :folder_recipes do |t|
      t.integer   :folder_id, null:false
      t.integer   :recipe_id, null:false

      t.timestamps null: false
    end
      add_index :folder_recipes, :folder_id
      add_index :folder_recipes, [:recipe_id, :folder_id], unique: true
  end
end
