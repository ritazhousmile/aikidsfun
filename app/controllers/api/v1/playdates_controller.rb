class Api::V1::PlaydatesController < ApplicationController
  # before_action :authorize_user, except: [:index, :show]

  def index
    render json: Playdate.all.order("created_at DESC")
  end

  def show
    playdate = Playdate.find(params[:id])
    render json: playdate
  end

  def create
    playdate = Playdate.new(playdate_params)
    if playdate.save
      render json: playdate
    else
      render json: playdate.errors.full_messages.join(',')
    end
  end

  private
  def playdate_params
    params.require(:playdate).permit(:name, :location, :time, :description)
  end
end
