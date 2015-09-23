class UpdateRecipeInfo < ActiveRecord::Migration
  def change
    change_column :recipes, :cuisine, :string
    change_column :recipes, :general, :string
    change_column :recipes, :diet, :string
    change_column :recipes, :course, :string
  end
end
