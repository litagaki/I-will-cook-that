class CreateFolders < ActiveRecord::Migration
  def change
    create_table :folders do |t|
      t.integer   :owner_id, null: false
      t.string    :title, null:false

      t.timestamps null: false
    end
      add_index :folders, [:owner_id, :title], unique: true
  end
end
