Rails.application.routes.draw do
 root to:'static_pages#root'

 resources :users, only: [:create,:new,:show,:update, :edit]
 resource :session, only: [:create, :new, :destroy]

 namespace :api, defaults: {format: :json} do
   resources :recipes, only: [:create, :show, :index]
   resources :reviews, only: [:index, :update, :destroy, :create]
   resources :folders, only: [:index, :show, :update, :destroy, :create]
 end

end
