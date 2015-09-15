class UpdateOwnerColumn < ActiveRecord::Migration
  def change
    rename_column :recipes, :owner_id, :author_id
  end
end
