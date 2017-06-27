Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create index show update]
    resource :session, only: %i[create destroy]
    resources :routes, except: %i[new edit]
    resources :friendships, except: %i[new edit]
    resources :comments, only: %i[create destroy]
  end
end
