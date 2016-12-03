Rails.application.routes.draw do
  # get 'guests/create'
  #
  # resources :lists do
  #   resources :guests
  # end
  #
  resources :users
  #
  # # roots
  # root "static_pages#home"
  #
  # # sessions
  # get "/signin", to: "sessions#new"
  # post "/sessions/create", to: "sessions#create"
  # delete "/signout", to: "sessions#destroy"


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
