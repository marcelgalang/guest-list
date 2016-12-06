class AddStatusToGuests < ActiveRecord::Migration[5.0]
  def change
    change_column :guests, :status, :integer, :default => 0
  end
end
