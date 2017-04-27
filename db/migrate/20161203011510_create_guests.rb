class CreateGuests < ActiveRecord::Migration[5.0]
  def change
    create_table :guests do |t|
      t.string :name
      t.boolean :status
      t.integer  :list_id
      t.timestamps
    end
  end
end
