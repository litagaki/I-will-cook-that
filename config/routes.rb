Rails.application.routes.draw do
 resources :users, only: [:create,:new,:show,:update, :edit]
 resource :session, only: [:create, :new, :destroy]
end
