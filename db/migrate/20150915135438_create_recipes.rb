class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.integer   :owner_id, null:false
      t.string    :title, null:false
      t.text      :description
      t.integer   :servings, null:false
      t.string    :active_time, null:false
      t.string    :total_time, null:false
      t.string    :photo_url
      t.text      :ingredients, null:false
      t.text      :instructions, null:false

      t.timestamps null: false
    end
      add_index :recipes, :owner_id
  end
end
