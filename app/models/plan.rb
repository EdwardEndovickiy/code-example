class Plan < ApplicationRecord
  validates :deadline, :description, presence: true
end
