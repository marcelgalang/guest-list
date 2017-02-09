class ChangePostIdToListId < ActiveRecord::Migration[5.0]
  def change
    rename_column :comments, :post_id, :list_id

  end
end
