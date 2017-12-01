class Finance < ApplicationRecord
  validates :price, :description, presence: true
end
