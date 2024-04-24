class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "transmissions_homepage"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
