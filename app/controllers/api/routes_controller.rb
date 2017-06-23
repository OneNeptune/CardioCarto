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
    if current_user
      @routes = current_user.routes
      render :index
    else
      render json: 'Not logged in', status: 422
    end
  end

  def show
    @route = Route.find(params[:id])
    render :show
  end

  def update
    @route = current_user.routes.find(params[:id])

    if @route.update(route_params)
      render :show
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def destroy
    route = current_user.routes.find(params[:id])
    if route
      route.destroy
      @routes = current_user.routes
      render :index
    else
      render json: 'Failed', status: 422
    end
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
      :finish_address,
      :completion_time
    )
  end
end
