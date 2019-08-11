Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only:[:index, :show, :edit, :update]
  resources :playdates, only:[:index, :show, :new, :create, :edit, :update]

   namespace :api do
     namespace :v1 do
       resources :playdates, only: [:index, :show, :new, :create, :edit, :update, :destroy]
       resources :messages, only: [:create]
       resources :users, only: [:index, :show]
           get "users/current" => "users#current_user"
           # get "/meetups", to: "meetup#search"
     end
   end
   get "/meetups", to: "meetups#search"
   get "/meetups", to: "meetup#search"


  #  namespace :api do
  #   namespace :v1 do
  #     resources :messages, only: [:create]
  #     resources :users, only: [:show]
  #     get "users/current" => "users#current_user"
  #   end
  # end
end
