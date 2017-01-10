class SharedListsController < ApplicationController

  def new
    @sharedlist = SharedList.new
  end

  def create
    @sharedlist = SharedList.new(shared_list_params)
    @sharedlist.save

    redirect_to list_path(
      @sharedlist.list.id)
  end

  private

  def shared_list_params
      params.require(:shared_list).permit(:user_id, :list_id, :permission)
    end
end
