Rails.application.routes.draw do
 root to:'static_pages#root'

 namespace :api, defaults: {format: :json} do
  resources :users, only: [:create,:show,:update]
  resource :session, only: [:create, :show, :destroy]
  resources :recipes, only: [:create, :show, :index]
  resources :reviews, only: [:index, :update, :destroy, :create]
  resources :folders, only: [:index, :show, :update, :destroy, :create] do
    resources :folder_recipes, only: [:create, :destroy]
  end
  resources :folder_recipes, only: [:index]
 end

end
