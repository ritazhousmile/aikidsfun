class PlaydatesController < ApplicationController
 #   before_action :authorize_user, except: [:index, :show]
 #
   def edit
     @playdate = Playdate.find(params[:id])
     binding.pry 
     unless current_user == @playdate.host
       redirect_to(@playdate, notice: "You cannot edit this playdate") and return
   end
   end
 #
 #
 #
 #
 #   def update
 #     @playdate = Playdate.find(params[:id])
 #
 #     if playdate.update(playdate_params)
 #       flash[:success] = "Playdate updated successfully"
 #       redirect_to: @playdate
 #     else
 #       render: edit
 #   end
 # end
 #
 #   def playdate_params
 #     params.require(:playdate).permit(:name, :location, :time, :description)
 #   end
 #
 #
 #   def authorize_user
 #     if !user_signed_in? || !current_user.host?
 #       flash[:notice] = "You do not have access to this page."
 #       redirect_to root_path
 #     end
 #   end
end
