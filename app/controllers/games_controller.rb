



validate :user_is_cool

def user_is_cool
  self.errors[:coolness] = "string"
end
