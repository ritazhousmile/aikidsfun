class Api::V1::PlaydatesController < ApplicationController

  def index
    render json: Playdate.all.order("created_at DESC")
  end

  def show
    playdate = Playdate.find(params[:id])
    render json: playdate
  end

  def create
    playdate = Playdate.new(playdate_params)
    playdate.host_id = current_user.id
    if playdate.save
      render json: playdate
    else
      render json: playdate.errors.full_messages.join(',')
    end
  end

  def edit
    playdate = Playdate.find(params[:id])
  end

  def update
    playdate = Playdate.find(params[:id])

    if playdate.update(playdate_params)
      flash[:success] = "Playdate updated successfully"
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
