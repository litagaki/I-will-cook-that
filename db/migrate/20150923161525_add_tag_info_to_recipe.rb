class AddTagInfoToRecipe < ActiveRecord::Migration
  def change
    add_column :recipes, :cuisine, :integer
    add_column :recipes, :course, :integer
    add_column :recipes, :diet, :integer
    add_column :recipes, :general, :integer

    add_index :recipes, :cuisine
    add_index :recipes, :course
    add_index :recipes, :diet
    add_index :recipes, :general
  end

end
