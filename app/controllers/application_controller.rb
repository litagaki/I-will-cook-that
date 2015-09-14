class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :is_logged_in?

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    return unless session[:session_token]
    user = User.find_by(session_token: session[:session_token])
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def is_logged_in?
    !!current_user
  end

end
