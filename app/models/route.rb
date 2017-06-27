# == Schema Information
#
# Table name: routes
#
#  id              :integer          not null, primary key
#  user_id         :integer          not null
#  title           :string           not null
#  polylines       :string           not null
#  distance        :float            not null
#  completed       :boolean          default("false")
#  created_at      :datetime
#  updated_at      :datetime
#  start_address   :string
#  finish_address  :string
#  duration        :integer
#  completion_time :integer
#

class Route < ActiveRecord::Base
  validates :user, :title, :polylines, :distance, presence: true

  belongs_to :user
  has_many :comments, dependent: :destroy,
    class_name: :Comment,
    primary_key: :id,
    foreign_key: :route_id

end
