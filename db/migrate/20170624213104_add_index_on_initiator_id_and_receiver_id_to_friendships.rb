class AddIndexOnInitiatorIdAndReceiverIdToFriendships < ActiveRecord::Migration
  def change
    add_index :friendships, [:initiator_id, :receiver_id], unique: true
  end
end
