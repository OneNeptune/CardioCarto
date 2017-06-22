class AddStartAndFinishToRoutes < ActiveRecord::Migration
  def change
    add_column :routes, :start_address, :string
    add_column :routes, :finish_address, :string

    remove_column :routes, :duration, :time

    add_column :routes, :duration, :integer
  end
end
