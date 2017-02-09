class CommentsController < ApplicationController
  before_action :set_list

  def index
    @comments = @list.comments
    # It went to implicit rendering
    # render :layout => false
    # render :json => @comments
    # render :layout => false
    redirect_to list_url(@list)
    # render 'index.html', :layout => false
    #   format.js {render 'index.js', :layout => false}
    # end
  end

  def create
    # @list = List.find(params[:id])
    @comment = @list.comments.build(comments_params)
    if @comment.save
      # I need to render something that just has the LI I want...
      # why not just create a comments/show view that shows the LI of one comment?
      redirect_to list_comments_path(@list)
      # render 'create.js', :layout => false
    else
      render "lists/show"
    end
  end


  private
    def set_list
      @list = List.find(params[:list_id])
    end

    def comments_params
      params.require(:comment).permit(:content)
    end
end
