class Userdate < ApplicationRecord
  belongs_to :user
  belongs_to :playdate 

  before_action :authorize_host, only: [:update, :destroy]

  def index
    playdates = Rails.cache.fetch("playdates_page_#{params[:page]}", expires_in: 1.hour) do
      Playdate.all.order("created_at DESC").page(params[:page]).per(10)
    end
    render json: playdates
  end

  private

  def authorize_host
    playdate = Playdate.includes(:users, :host).find(params[:id])
    unless current_user == playdate.host
      render json: { error: 'You are not authorized to perform this action' }, status: :unauthorized
      return
    end
  end

  def playdate_params
    params.require(:playdate).permit(:name, :location, :time, :description)
  end
end
