class AddColumnsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :social_network, :string
  end
end
