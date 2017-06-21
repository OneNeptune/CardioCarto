class CreateRoutes < ActiveRecord::Migration
  def change
    create_table :routes do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :polylines, null: false
      t.float :distance, null: false
      t.time :duration, default: nil
      t.boolean :completed, default: false

      t.timestamps
    end

    add_index :routes, :user_id
  end
end
