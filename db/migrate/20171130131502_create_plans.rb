class CreatePlans < ActiveRecord::Migration[5.1]
  def change
    create_table :plans do |t|
      t.datetime :deadline
      t.text :description

      t.timestamps
    end
  end
end
