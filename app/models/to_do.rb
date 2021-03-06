# frozen_string_literal: true

# Model for ToDo
class ToDo < ApplicationRecord
  validates :body, :title, presence: true
  belongs_to :user
end
