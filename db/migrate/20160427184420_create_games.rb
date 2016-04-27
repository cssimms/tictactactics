class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :status, null: false, default: "open"
      t.string :moveset, null: false, default: "{}"
      t.integer :x_id, null: false, index: true
      t.integer :o_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
