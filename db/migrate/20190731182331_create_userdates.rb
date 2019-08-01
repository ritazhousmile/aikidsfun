class CreateUserdates < ActiveRecord::Migration[5.2]
  def change
    create_table :userdates do |t|
      t.belongs_to :user, null: false
      t.belongs_to :playdate, null: false

      t.timestamps null: false 
    end
  end
end
