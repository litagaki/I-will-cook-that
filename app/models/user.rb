class User < ActiveRecord::Base
  validates: :username,:email,:password_digest,:session_token, presence: true
  validates: :password, length: {minimum: 6, allow_nil: true}


  private
  def user_params
    params.require(:user).
    permit(:username,:email,:password,:old_password,:confirm_password)
  end
end
