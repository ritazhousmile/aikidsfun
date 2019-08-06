class AddAttendeesColumnToPlaydate < ActiveRecord::Migration[5.2]
  def change
    add_column :playdates, :attendees, :string, default: [], array: true
  end
end
