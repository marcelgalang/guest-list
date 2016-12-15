class GuestsController < ApplicationController
  # before_action :set_guest, only: [:show, :edit, :update, :destroy]


  def index
    @guests = Guest.all
  end


  def show
    # @list = List.find(params[:id])
    @guest = Guest.find(params[:id])
  end


  def new
    @guest = Guest.new
  end


  def edit
  end


  def create
    @list = List.find(params[:list_id])
    @guest = @list.guests.build(guest_params)
    if @guest.save
      redirect_to list_path(@list)
    else
      render "lists/show"
    end
  end

  def update
    # raise params.inspect
    @guest = Guest.find(params[:id])
    @guest.update(guest_params)

    redirect_to list_path(@guest.list)
  end
  # DELETE /guests/1
  # DELETE /guests/1.json
  def destroy
    can_current_user?(:destroy, @guest)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_guest
      @guest = Guest.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def guest_params
      params.require(:guest).permit(:name, :status, :list_id)
    end
  end
