class Api::V1::UsersController < ApplicationController

  def show
      render json: { user_id: current_user.id, first_name: current_user.first_name, profile_photo: current_user.profile_photo }
  end

end
