class AddQuestionColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :number_of_kids, :string
    add_column :users, :born_month_and_year, :string
    add_column :users, :favorite_activities, :string
    add_column :users, :favorite_places, :string
    add_column :users, :self_introduction, :string
  end
end
