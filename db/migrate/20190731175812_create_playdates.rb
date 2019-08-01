class CreatePlaydates < ActiveRecord::Migration[5.2]
  def change
    create_table :playdates do |t|
      t.string :name, null: false
      t.datetime :time, null: false
      t.string :location, null: false
      t.string :description, null: false

      t.timestamps null: false
    end
  end
end
