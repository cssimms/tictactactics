class AddAiColumn < ActiveRecord::Migration
  def change
    add_column :games, :comp_id, :integer, default: 0, null:false
  end
end
