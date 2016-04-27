class Game < ActiveRecord::Base
  validates :status, :moveset, :x_id, :o_id, presence: true

  
end
