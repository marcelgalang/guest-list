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
   resources :comments
  end

  # resources :shared_lists
  get 'shared_lists/new'
  post "/shared_lists", to: "shared_lists#create"

  root 'lists#index'

end
