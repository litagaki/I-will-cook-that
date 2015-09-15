Rails.application.routes.draw do
 root to:'static_pages#root'

 resources :users, only: [:create,:new,:show,:update, :edit]
 resource :session, only: [:create, :new, :destroy]

 namespace :api, defaults: {format: :json} do
   resources :recipes, only: [:create, :show, :index]
 end
end
