class ChangeDefaultStatusGuest < ActiveRecord::Migration[5.0]
  def change
    change_column :guests, :status, :boolean, default: false
  end
end
