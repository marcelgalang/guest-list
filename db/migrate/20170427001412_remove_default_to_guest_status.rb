class RemoveDefaultToGuestStatus < ActiveRecord::Migration[5.0]
  def change
    change_column :guests, :status, :boolean
  end
end
