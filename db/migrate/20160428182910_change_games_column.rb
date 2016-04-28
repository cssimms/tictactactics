class ChangeGamesColumn < ActiveRecord::Migration
  def change
    change_column :games, :moveset, :string, default: '[]'
  end
end
