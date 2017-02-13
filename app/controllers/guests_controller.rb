class GuestsController < ApplicationController

  def index
    @list = List.find(params[:list_id])
    @guests = @list.guests
    @guest = Guest.new
  end


  def show
    @guest = Guest.find(params[:id])
  end


  def new
    @guest = Guest.new
  end


  def api_create
    @list = List.find(params[:list_id])
    @guest = @list.guests.build(guest_params)
    if @guest.save
      render 'guests/show', :layout => false
      # redirect_to list_guests_path(@list)
    # else
    #   redirect_to list_path(@list)
    end
  end

  def create
    @list = List.find(params[:list_id])
    @guest = @list.guests.build(guest_params)
    if @guest.save
      redirect_to list_guests_path(@list)
      # render 'guests/show', :layout => false

    # else
    #   redirect_to list_path(@list)
    end
  end

  def update
    @guest = Guest.find(params[:id])
    @guest.update(guest_params)

    redirect_to list_path(@guest.list)
  end

#need to implement
  def destroy
    can_current_user?(:destroy, @guest)
  end

  private

    def set_guest
      @guest = Guest.find(params[:id])
    end


    def guest_params
      params.require(:guest).permit(:name, :status, :list_id)
    end
  end
