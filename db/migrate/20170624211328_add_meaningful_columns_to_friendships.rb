class AddMeaningfulColumnsToFriendships < ActiveRecord::Migration
  def change
    add_column :friendships, :initiator_id, :integer, null: false
    add_column :friendships, :receiver_id, :integer, null: false
    add_column :friendships, :status, :boolean, default: false

    remove_column :routes, :bounds, :string
  end
end
