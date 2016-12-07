class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]


  def show
    redirect_to '/' unless logged_in?
  end


  def new
    @user = User.new
  end

  def create
    user = User.new(user_params)
      if user.save
        session[:user_id] = user.id
        redirect_to list_path(user)
      else
        render :new
      end
  end


  def edit
  end


  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
  params.require(:user).permit(
    :username,
    :id,
    :password,
    :email
     )
  end
end
