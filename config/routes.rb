Rails.application.routes.draw do

  resources :users

  get '/auth/facebook/callback' => 'sessions#create'

  get '/login' => 'sessions#new'
  post '/sessions' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get 'guests/create'

  resources :lists do
   resources :guests
  end

  root 'lists#index'

end
