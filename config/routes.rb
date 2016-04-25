Rails.application.routes.draw do
	root to: 'static_pages#root.html'

	namespace :api defaults: {format: :json} do
		resource :user, only: [:index, :show, :create, :update, :destroy]
		resources :games, only: [:index, :show, :create, :update, :destroy]
	end
end
