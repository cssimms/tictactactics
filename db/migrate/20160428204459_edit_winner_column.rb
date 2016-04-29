class EditWinnerColumn < ActiveRecord::Migration
  def change
    remove_index :games, :winner
    add_index :games, :winner
  end
end
