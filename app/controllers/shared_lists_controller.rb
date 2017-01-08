class SharedListsController < ApplicationController

  def new
    @sharedlist = SharedList.new
  end

  def create
    @sharedlist = SharedList.create(
      :user_id => params[:user_id],
      :list_id => params[:list_id],
      :permission => params[:permission]
      )
    @list = List.find_by(params[:id])
    # raise params.inspect

    redirect_to list_path(
      @list)
  end
end
