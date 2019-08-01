class Api::V1::PlaydatesController < ApplicationController
  def index
    render json: Playdate.all
  end

  def show
    render json: Playdate.find(params[:id])
  end
end
