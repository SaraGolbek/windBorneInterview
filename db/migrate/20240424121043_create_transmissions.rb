class CreateTransmissions < ActiveRecord::Migration[6.1]
  def change
    create_table :transmissions do |t|

      t.decimal   :altitude
      t.decimal   :latitude
      t.decimal   :longitude

      t.timestamps
    end
  end
end

