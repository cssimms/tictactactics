class WinnerColumnGames < ActiveRecord::Migration
  def change
    add_column :games, :winner, :string, default: 'f', null: false 
  end
end
