class GuestsController < ApplicationController
  before_action :set_guest, only: [:show, :edit, :update, :destroy]

  # GET /guests
  # GET /guests.json
  def index
    @guests = Guest.all
  end

  # GET /guests/1
  # GET /guests/1.json
  def show
  end

  # GET /guests/new
  def new
    @guest = Guest.new
  end

  # GET /guests/1/edit
  def edit
  end

  # POST /guests
  # POST /guests.json
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
    @guest = guest.find(params[:id])
    @guest.update(guest_params)

    redirect_to list_path(@guest.list)
  end
  # DELETE /guests/1
  # DELETE /guests/1.json
  def destroy
    @guest.destroy
    redirect_to guests_url, notice: 'guest was successfully destroyed.'

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_guest
      @guest = guest.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def guest_params
      params.require(:guest).permit(:name, :status, :list_id)
    end
  end
