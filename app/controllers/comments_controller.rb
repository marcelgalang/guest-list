class CommentsController < ApplicationController
  # before_action :set_list
  # before_action :set_comment

  def index
    @list = List.find(params[:list_id])
    @comments = @list.comments
    # render :layout => false
    render :json => @comments
    # redirect_to list_url(@list)
    # render 'index.js', :layout => false
    # respond_to do |format|
    #     format.html {render 'index.html', :layout => false}
    #     format.js {render 'index.js', :layout => false}
    #   end
  end
  def api_index
    @comments = @list.comments
    render json: @comments
  end


  def api_show
    @comment = Comment.find(params[:id])
    @list = List.find_by_id(@comment.list.id)
    render json: @comment
    binding.pry

  end


  def create
    @list = List.find(params[:list_id])
    @comment = @list.comments.build(comments_params)
    if @comment.save
      render 'comments/show', :layout => false
      # I need to render something that just has the LI I want...
      # why not just create a comments/show view that shows the LI of one comment?

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
      params.require(:comment).permit(:content, :user_id)
    end
end
