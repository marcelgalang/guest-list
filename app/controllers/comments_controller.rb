class CommentsController < ApplicationController
  # before_action :set_list
  # before_action :set_comment

  def index
    @list = List.find(params[:list_id])
    @comments = @list.comments
    # render :layout => false
    # render json: @comments
    redirect_to list_url(@list)
    # respond_to do |format|
    #   format.html {render 'index.html', :layout => false}
    #   format.js {render 'index.js', :layout => false}
    # end
  end
  def api_index
    @comments = @list.comments
    render json: @comments
  end

  def api_show
    # @comment = Comment.find(params[:id])
    # @list = List.find_by_id(@comment.list.id)
    render json: @comment
  end


  def create
    @list = List.find(params[:list_id])
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
    def set_comment
      @comment = Comment.find(params[:id])
    end

    def set_list
      # @list = List.find(params[:list_id])
      @list = List.find_by_id(@comment.list.id)
    end

    def comments_params
      params.require(:comment).permit(:content)
    end
end
