class Api::RoutesController < ApplicationController
  def create
    @route = Route.new(route_params)
    @route[:user_id] = current_user.id

    if @route.save
      render :show
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def index
    @routes = current_user.routes
    render :index
  end

  def show
    @route = Route.find(params[:id])
    render :show
  end

  private

  def route_params
    params.require(:route).permit(
      :title,
      :polylines,
      :distance,
      :duration,
      :completed,
      :start_address,
      :finish_address
    )
  end
end
