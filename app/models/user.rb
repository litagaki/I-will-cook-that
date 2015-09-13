class User < ActiveRecord::Base
  validates :username,:email,:password_digest,:session_token, presence: true
  validates :username,:email,:session_token, uniqueness:true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password, :old_password, :confirm_password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username,password)
    user = User.find_by(username: username)
    return unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!

    session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end
end
