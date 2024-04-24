Rails.application.routes.draw do
  root to: "static_pages#home"

  namespace :api do
    resources :transmissions, only: [:index, :show, :create]

    post '/transmissions' => 'transmissions#create'
    get  '/transmissions' => 'transmissions#index'
  end

end