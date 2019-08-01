class Api::V1::PlaydatesController < ApplicationController
  def index
    render json: Playdate.all  
  end
end
