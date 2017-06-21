Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create update show]
    resource :session, only: %i[create destroy]
    resources :routes, only: %i[create index show]
  end
end
