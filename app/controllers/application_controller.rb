class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  protect_from_forgery unless: -> { request.format.json? }

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
   devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name,
     :age, :town, :career, :availability, :profile_photo])
     devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name,
       :age, :town, :career, :availability, :profile_photo, :social_network, :number_of_kids,
       :born_month_and_year, :favorite_activities, :favorite_places])
  end
end
