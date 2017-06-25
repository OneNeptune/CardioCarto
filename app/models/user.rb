# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
  validates :first_name, :last_name, presence: true
  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  attr_reader :password

  has_many :routes, dependent: :destroy

  has_many :initiated_friendships,
    class_name: :Friendship,
    primary_key: :id,
    foreign_key: :initiator_id

  has_many :received_friendships,
    class_name: :Friendship,
    primary_key: :id,
    foreign_key: :receiver_id

  def total_duration
    self.routes
      .where(completed: true)
      .sum(:duration)
  end

  def total_distance
    self.routes
      .where(completed: true)
      .sum(:distance)
  end

  def most_recent_routes
    self.routes
      .where(completed: true)
      .order(created_at: :desc)
      .limit(4)
  end

  def pending
    self.routes
      .where(completed: false)
      .limit(8)
  end

  def location
    self.routes
      .order(created_at: :desc)
      .pluck(:finish_address)
      .first
  end

  def total_completed
    self.routes
      .where(completed: true)
      .count(:all)
  end

  def total_created
    self.routes
      .where(completed: false)
      .count(:all)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
