class Transmission < ApplicationRecord
  validates :altitude, presence: true, numericality: true
  validates :latitude, presence: true, numericality: true
  validates :longitude, presence: true, numericality: true

  def stream_new_chat
    ActionCable.server.broadcast('transmissions_homepage', { body: self.message })
  end
end