# == Schema Information
#
# Table name: routes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  polylines  :string           not null
#  distance   :float            not null
#  duration   :time
#  completed  :boolean          default("false")
#  created_at :datetime
#  updated_at :datetime
#

class Route < ActiveRecord::Base
  validates :user, :title, :polylines, :distance, presence: true

  belongs_to :user

end
