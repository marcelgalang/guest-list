class SessionsController < ApplicationController
  # skip_before_action :login_required, :only => [:new, :create]

  def new
  end

  def create
    if params[:email].present? && params[:password].present?
      user = User.find_by(:email => params[:email])
      if user && user.authenticate(params[:password])
        login(user)
        redirect_to lists_path
      else
        flash.now[:notice] = "Could not find that person, sorry!"
        render :new
      end
    elsif request.env['omniauth.auth'].present?
      # is this the first time I've seen you?
      user = User.find_or_create_by(:uid => auth['uid']) do |u|
      u.username = auth['info']['username']
      u.email = auth['info']['email']
    end
    session[:user_id] = user.try(:id)
      redirect_to lists_path
    end
  end

  def auth
    request.env['omniauth.auth']
  end



  def destroy
    session.clear
    redirect_to login_path
  end

end
