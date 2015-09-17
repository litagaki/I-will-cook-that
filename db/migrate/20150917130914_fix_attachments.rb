class FixAttachments < ActiveRecord::Migration
  def change
    remove_attachment :users, :photo
    add_attachment :recipes, :photo
  end
end
