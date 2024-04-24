json.transmission do
    json.id         @transmission.id
    json.altitude   @transmission.altitude
    json.latitude   @transmission.latitude
    json.longitude  @transmission.longitude
    json.created_at @transmission.created_at
end