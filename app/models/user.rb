class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true

  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_user_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(new_password)
    self.password_digest = BCrypt::Password.create(new_password)
    @password = new_password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    self.save!
    self.session_token
  end

  private

  def new_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def ensure_session_token_uniqueness
    while User.find_by_session_token(session[:session_token])
      self.session_token = new_session_token
    end
  end
end
