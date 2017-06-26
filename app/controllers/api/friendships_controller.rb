class Api::FriendshipsController < ApplicationController
  def create
    @friendship = Friendship.new(friendship_params)
    @friendship[:initiator_id] = current_user.id

    if @friendship.save
      render json: {}, status: 200
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def index
    @potential_friends = User.all
      .where
      .not(id: current_user
        .friends
        .push(current_user)
        .push(current_user.pending_friends))
    @active_friends = current_user.friends
    @approved_friendships = current_user.approved_friendships

    @pending_friends = current_user.pending_friends
    @pending_requests = current_user.pending_requests
    @pending_response = current_user.pending_response

    render :index
  end

  def show
  end

  def update
    @friendship = Friendship.find(params[:id])

    if @friendship.update(friendship_params)
      render json: {}, status: 200
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def destroy
    @friendship = Friendship.find(params[:id])
    @friendship.destroy
    render json: @friendship.errors.full_messages
  end

  private

  def friendship_params
    params.require(:friendship).permit(:receiver_id, :status)
  end
end
