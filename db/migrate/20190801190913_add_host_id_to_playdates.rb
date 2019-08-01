class AddHostIdToPlaydates < ActiveRecord::Migration[5.2]
  def change
    add_column :playdates, :host_id, :integer, null: false, default: 3
  end
end
