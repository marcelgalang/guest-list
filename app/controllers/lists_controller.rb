class ListsController < ApplicationController
  # before_action :set_list, only: [:show, :edit, :update, :destroy]

  # GET /lists
  # GET /lists.json
  def index
    @lists = List.all
    @list = List.new
  end

  # GET /lists/1
  # GET /lists/1.json
  def show
    @list = List.find_or_create_by(params[:id])
    @guest = guest.new
  end

  # GET /lists/new
  def new
    @list = List.new
    # @list.guests.build
  end


  def edit
    @list = List.find(params[:id])
  end


  def create
    @list = List.new(list_params)
    if @list.save
      redirect_to list_url(@list)
    else
      @lists = List.all
      render :index
    end
  end


  def destroy
    @list.destroy
    redirect_to lists_url, notice: 'List was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_list
      @list = List.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def list_params
      params.require(:list).permit(:name, :guests_attributes => [:name])
    end
end
