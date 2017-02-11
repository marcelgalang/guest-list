class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception
  before_action :current_user
  before_filter :set_no_cache

  def set_no_cache
    response.headers["Cache-Control"] = "no-cache, no-store, max-age=0, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "Fri, 01 Jan 1990 00:00:00 GMT"
  end


private

# permissions to be implemented
  def can_current_user?(action, object)
    object.send("#{action}able_by?", current_user)
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def logged_in?
    !!current_user
  end

  private

#get to work with Oauth
  def require_logged_in
    redirect_to login_path, :notice => "Please login first!"unless logged_in?
  end

  helper_method :current_user
end
