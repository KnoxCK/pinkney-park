Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'stay', to: 'pages#stay'
  get 'events', to: 'pages#events'
  get 'properties', to: 'pages#properties'
  get 'contact', to: 'pages#contact'
  get 'local_area', to: 'pages#local_area'
  get 'gallery', to: 'pages#gallery'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
