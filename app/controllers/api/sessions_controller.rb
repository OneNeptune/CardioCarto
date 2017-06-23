class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      session_params[:email],
      session_params[:password])

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid credentials, please try again."], status: 401
    end
  end

  def destroy
    user = current_user

    if user
      logout!
      render json: {}, status: 200
    else
      render json: ["Not logged in. Please log in."], status: 422
    end
  end

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end
end
