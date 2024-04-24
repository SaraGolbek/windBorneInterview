class Transmission < ApplicationRecord
  validates :altitude, presence: true, numericality: true
  validates :latitude, presence: true, numericality: true
  validates :longitude, presence: true, numericality: true
end