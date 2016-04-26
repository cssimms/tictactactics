Rails.application.routes.draw do
	root to: 'static_pages#root.html'

	namespace :api defaults: {format: :json} do
		
		resource :user, only: [:index, :show, :create, :update, :destroy] do
			resources :games, only: [:index]
		end

		resources :games, only: [:index, :show, :create, :update, :destroy]
	end
end
