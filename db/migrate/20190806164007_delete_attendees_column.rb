class DeleteAttendeesColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :playdates, :attendees 
  end
end
