class SharedListsController < ApplicationController
  def new
    @sharedlist = SharedList.create(
      :user_id => params[:user_id],
      :list_id => params[:list_id],
      :permission => params[:permission]
      )
    @users = User.all
    redirect_to list_url(@list)
  end
end
