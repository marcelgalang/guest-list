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
  # api show routes
  #all comments for a event list
  get 'api/lists/:id/comments', to: 'comments#api_index'
  #single comment for event list
  get 'api/lists/:id/comments/:id', to: 'comments#api_show'


end
