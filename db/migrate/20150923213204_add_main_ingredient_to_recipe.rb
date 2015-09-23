class AddMainIngredientToRecipe < ActiveRecord::Migration
  def change
    add_column :recipes, :main_ingredient, :string
  end
end
