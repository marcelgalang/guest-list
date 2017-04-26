class RemoveStatusFromGuests < ActiveRecord::Migration[5.0]
  def change
    remove_column :guests, :status
  end
end
