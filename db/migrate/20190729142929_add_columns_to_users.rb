class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :town, :string, null: false
    add_column :users, :age, :integer, null: false
    add_column :users, :career, :string, null: false
    add_column :users, :availability, :string, null: false
  end
end
