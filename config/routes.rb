Rails.application.routes.draw do

  get 'sharedlists/new'

  resources :users

  get '/auth/facebook/callback' => 'sessions#create'

  get '/login' => 'sessions#new'
  post '/sessions' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get 'guests/create'

  resources :lists do
   resources :guests
  end

  resources :shared_lists
  # get 'sharedlists/new'
  # post "/sharedlists/new", to: "sharedlists#new"

  root 'lists#index'

end
