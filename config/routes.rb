Rails.application.routes.draw do
 root to:'static_pages#root'

 namespace :api, defaults: {format: :json} do
  resources :users, only: [:create,:show,:update]
  resource :session, only: [:create, :show, :destroy]
  get '/recipes/recent', to: 'recipes#recent'
  resources :recipes, only: [:create, :show, :index] do
    resources :taggings, only: [:index]
  end
  resources :reviews, only: [:index, :update, :destroy, :create]
  resources :folders, only: [:index, :show, :update, :destroy, :create] do
    resources :folder_recipes, only: [:create, :destroy]
  end
  resources :tags, only: [:index, :create] do
    resources :taggings, only: [:create]
  end

  resources :folder_recipes, only: [:index]
 end

end
