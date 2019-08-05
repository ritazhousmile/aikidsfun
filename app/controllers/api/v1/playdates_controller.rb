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

  def update
    playdate = Playdate.find(params[:id])

    if current_user == playdate.host
      if playdate.update(playdate_params)
        flash[:success] = "Playdate updated successfully"
        render json: playdate
      else
        render json: playdate.errors.full_messages.join(',')
      end
    else
      raise ActionController::RoutingError.new("You are not authorized to update this playdate")
    end
  end

  def destroy
    playdate = Playdate.find(params[:id])
    if current_user == playdate.host
      playdate.destroy
      render json: Playdate.all
    else
       render json: {playdate: "playdate", error_message: 'You are not authorized to delete this playdate!'}
     end
  end

  private
  def playdate_params
    params.require(:playdate).permit(:name, :location, :time, :description)
  end




end
