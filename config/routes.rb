Rails.application.routes.draw do
	root to: 'static_pages#root.html'

	namespace :api, defaults: {format: :json} do
		resource :session, only: [:create, :destroy]
		resources :users, only: [:index, :show, :create]
		resources :games, only: [:index, :show, :create, :update, :destroy]
		get '/user/current_user', to: 'users#get_current_user'
	end
end
