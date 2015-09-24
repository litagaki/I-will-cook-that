class User < ActiveRecord::Base

  validates :username,:password_digest,:session_token, presence: true
  validates :session_token, uniqueness:true
  validates :username, uniqueness: {message: "Username is already taken"}
  validates :email, uniqueness:
    {allow_nil: true, message: "This email is already associated with an account"}
  validates :password, length: {minimum: 6, allow_nil: true}
  validate :passwords_match

  validate :validate_email

  attr_reader :password
  attr_accessor :old_password, :confirm_password

  after_initialize :ensure_session_token

  has_many :authored_recipes,
    class_name: "Recipe",
    foreign_key: :author_id,
    inverse_of: :author

  has_many :authored_reviews,
    class_name: "Review",
    foreign_key: :author_id,
    inverse_of: :author

  has_many :folders,
    foreign_key: :owner_id,
    inverse_of: :owner

  has_many :folder_recipes,
    through: :folders,
    source: :folder_recipes

  has_many :saved_recipes,
    through: :folders,
    source: :recipes

  def self.find_by_credentials(username,password)
    user = User.find_by(username: username)
    return unless user
    user.is_password?(password) ? user : nil
  end

  def self.find_or_create_from_auth_hash(auth_hash)
    user = User.find_by(
      provider: auth_hash[:provider],
      uid: auth_hash[:uid])

    unless user
      password = SecureRandom::urlsafe_base64
      user = User.create!(
        provider: auth_hash[:provider],
        uid: auth_hash[:uid],
        username: auth_hash[:info][:name],
        password: password,
        confirm_password: password
        )
    end

    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def can_reset_password?(old_password)
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

  def validate_email
    if !provider && !email
      errors.add(:email, "can't be blank")
    end
  end
end
