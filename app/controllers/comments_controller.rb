class CommentsController < ApplicationController
  # before_action :set_list
  # before_action :set_comment

  def index
    @list = List.find(params[:list_id])
    @guest = Guest.new
    @sharedlist = SharedList.new
    @comment = Comment.new
    @comments = @list.comments
    # render :layout => false
    # render :json => @comments

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

  # def show
  #   @comment = Comment.find(params[:id])
  #   @list = List.find_by_id(@comment.list.id)
  #   redirect_to list_comments_path(@list)
  # end


  def create
    @list = List.find(params[:list_id])
    @comment = @list.comments.build(comments_params)
    # @comments = @list.comments
    if @comment.save
      redirect_to list_comments_path(@list)
    end
  end


  # def create
  #   @list = List.find([:list_id])
  #   @comment = @list.comments.build(comments_params)
  #   @comments = @list.comments
  #   if @comment.save
  #
  #     render 'create.js', :layout => false
  #   else
  #    render "lists/show"
  #  end
  # end

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
