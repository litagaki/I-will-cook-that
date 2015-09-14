class User < ActiveRecord::Base
  validates :username,:email,:password_digest,:session_token, presence: true
  validates :username,:email,:session_token, uniqueness:true
  validates :password, length: {minimum: 6, allow_nil: true}
  validate :passwords_match

  attr_reader :password
  attr_accessor :old_password, :confirm_password

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

  def can_reset_password?
    is_password?(old_password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!

    session_token
  end

  def passwords_match
    if password != confirm_password
      errors.add(:confirm_password, "Passwords must match")
    end
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end
end
