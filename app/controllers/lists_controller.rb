class ListsController < ApplicationController

  before_action :set_list, only: [:api_show, :show, :edit, :update, :destroy]

  def index
    @lists = List.all
    @list = List.new
  end

  def api_index
    @lists = List.all
    render :json => @lists
  end

  def api_show
    # @list = List.find(params[:id])
    render :json => @list
  end


  def show
    @guest = Guest.new
    @sharedlist = SharedList.new
    @comment = Comment.new
    @comments = @list.comments
  end


  def new
    @list = List.new
  end

#not implemented
  def edit
    @list = List.find(params[:id])
    if !can_current_user?(:edit, @list)
      redirect_to :index, :notice => "Can't find that..."
    end
  end


  def create
    @list = List.new(list_params)
    if @list.save
      render json: @comment, status: 201
    else
      @lists = List.all
      render :index
    end
  end

#not implemented into views
  def destroy
    @list.destroy
    redirect_to lists_url, notice: 'List was successfully destroyed.'
  end

  private

    def set_list
      @list = List.find(params[:id])
    end


    def list_params
      params.require(:list).permit(:name, :guests_attributes => [:name])
    end
end
