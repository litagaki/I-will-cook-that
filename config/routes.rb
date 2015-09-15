Rails.application.routes.draw do
 root to:'static_pages#root'

 resources :users, only: [:create,:new,:show,:update, :edit]
 resource :session, only: [:create, :new, :destroy]
end
