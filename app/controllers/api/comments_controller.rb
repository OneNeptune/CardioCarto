class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment[:author_id] = current_user.id

    if @comment.save
      render json: {}, status: 200
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = current_user.comments.find(params[:id])

    if @comment.update(comment_params)
      render json: @comment, status: 200
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    @comment.delete
    render json: @comment.errors.full_messages, status: 200
  end

  private

  def comment_params
    params.require(:comment).permit(:route_id, :body)
  end

end
