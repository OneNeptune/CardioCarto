class AddCompleteTimeToRoutes < ActiveRecord::Migration
  def change
    add_column :routes, :completion_time, :integer
  end
end
