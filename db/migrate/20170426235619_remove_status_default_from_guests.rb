class RemoveStatusDefaultFromGuests < ActiveRecord::Migration[5.0]
  def change
    change_column_default :guests, :status, nil
  end
end
