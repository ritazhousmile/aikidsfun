Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only:[:index, :show, :edit, :update]
  resources :playdates, only:[:index]

  # namespace :api do
  #    namespace :v1 do
       # get "/meetups", to: "meetups#search"
     # end
   # end
   namespace :api do
     namespace :v1 do
       resources :playdates, only: [:index]
     end
   end
end
