class AddProviderDataToUsers < ActiveRecord::Migration
  def change
    add_column :users, :provider, :string
    add_column :users, :uid, :string
    add_index :users, [:uid, :provider]
  end
end
