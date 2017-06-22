class AddBoundsToRoutes < ActiveRecord::Migration
  def change
    add_column :routes, :bounds, :string
  end
end
