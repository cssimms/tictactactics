class IndexOnGamesWinner < ActiveRecord::Migration
  def change
    add_index :games, :winner, unique: true
  end
end
