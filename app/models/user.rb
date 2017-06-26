# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  email              :string           not null
#  first_name         :string           not null
#  last_name          :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  created_at         :datetime
#  updated_at         :datetime
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ActiveRecord::Base
  validates :first_name, :last_name, presence: true
  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }


  after_initialize :ensure_session_token

  attr_reader :password

  has_attached_file :image, default_url: "https://s3.us-east-2.amazonaws.com/cardio-carto-dev/avatar.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :routes, dependent: :destroy

  has_many :pending_initiated_friendships, -> { where status: false },
    class_name: :Friendship,
    primary_key: :id,
    foreign_key: :initiator_id

  has_many :pending_received_friendships, -> { where status: false },
    class_name: :Friendship,
    primary_key: :id,
    foreign_key: :receiver_id

  has_many :approved_initiated_friendships, -> { where status: true },
    class_name: :Friendship,
    primary_key: :id,
    foreign_key: :initiator_id

  has_many :approved_received_friendships, -> { where status: true },
    class_name: :Friendship,
    primary_key: :id,
    foreign_key: :receiver_id

  has_many :pending_initiated_friends,
    through: :pending_initiated_friendships,
    source: :receiver

  has_many :pending_received_friends,
    through: :pending_received_friendships,
    source: :initiator

  has_many :approved_initiated_friends,
    through: :approved_initiated_friendships,
    source: :receiver

  has_many :approved_received_friends,
    through: :approved_received_friendships,
    source: :initiator

  def friends
    self.approved_received_friends + self.approved_initiated_friends
  end

  def approved_friendships
    self.approved_received_friendships + self.approved_initiated_friendships
  end

  def pending_friends
    self.pending_received_friends + self.pending_initiated_friends
  end

  def pending_requests
    self.pending_received_friendships
  end

  def pending_response
    self.pending_initiated_friendships
  end

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
