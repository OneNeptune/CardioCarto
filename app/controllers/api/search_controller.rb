class Api::FeedController < ApplicationController
  def create
    @results = current_user.find_friends(search_params[:query])
    render :index
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end
end
