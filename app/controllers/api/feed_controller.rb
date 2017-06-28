class Api::FeedController < ApplicationController
  def index
    @feed = current_user.activity_feed
    render :index
  end
end
