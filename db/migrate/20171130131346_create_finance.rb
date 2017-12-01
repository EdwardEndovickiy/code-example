class CreateFinance < ActiveRecord::Migration[5.1]
  def change
    create_table :finances do |t|
      t.float :price
      t.text :description

      t.timestamps
    end
  end
end
