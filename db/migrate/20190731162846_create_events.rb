class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.datetime :time, null: false
      t.string :address, null: false
      t.string :detail, null: false

      t.timestamps null: false 
    end
  end
end
