class AddIndicesToFriendships < ActiveRecord::Migration
  def change
    add_index :friendships, :initiator_id
    add_index :friendships, :receiver_id
  end
end
