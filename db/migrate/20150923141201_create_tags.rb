class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string   :label, null: false
      t.integer  :category, null:false

      t.timestamps null: false
    end
      add_index :tags, [:label, :category], unique: true
  end
end
