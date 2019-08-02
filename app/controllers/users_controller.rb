class UsersController < ApplicationController
  def index
     users = User.all
     @Users_without_current_users = array_without_current_user(users)
   end

  def show
    @user = User.find(params[:id])
  end

  private

  def array_without_current_user(users_array)
    new_array = users_array.select do |user|
      user != current_user
    end
    return new_array
  end

end
