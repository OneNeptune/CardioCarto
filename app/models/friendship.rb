# == Schema Information
#
# Table name: friendships
#
#  id           :integer          not null, primary key
#  initiator_id :integer          not null
#  receiver_id  :integer          not null
#  status       :boolean          default("false")
#  created_at   :datetime
#  updated_at   :datetime
#

class Friendship < ActiveRecord::Base
  validates :initiator, :receiver, presence: true
  validates :initiator_id, uniqueness: { scope: :receiver_id }
  validates :receiver_id, uniqueness: { scope: :initiator_id }

  belongs_to :initiator,
    class_name: :User,
    primary_key: :id,
    foreign_key: :initiator_id

  belongs_to :receiver,
    class_name: :User,
    primary_key: :id,
    foreign_key: :receiver_id
end
