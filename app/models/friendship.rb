# == Schema Information
#
# Table name: friendships
#
#  id           :integer          not null, primary key
#  initiator_id :integer          not null
#  receiver_id  :integer          not null
#  status       :boolean          default("false")
#

class Friendship < ActiveRecord::Base
  validate :initiator, :receiver

  belongs_to :initiator
  belongs_to :receiver
end
