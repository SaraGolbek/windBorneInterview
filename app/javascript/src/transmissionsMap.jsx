//map.jsx
import React, { useRef, useEffect } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";

const TransmissionsMap = ({ transmissions }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (transmissions.length > 0) {
      buildMap();
    }
  }, [transmissions]);

  const buildMap = () => {
    const chartHeight = document.getElementById('altitudeChart').clientHeight;

    if (mapContainerRef.current) {
      mapContainerRef.current.style.height = `${chartHeight}px`;
    }

    return (
      <GoogleMap defaultZoom={1.3} defaultCenter={{ lat: 47.83033, lng: -17.6903 }}>
        { transmissions.map(transmission => (
          <Marker key={transmission.id} position={{ lat: parseFloat(transmission.latitude), lng: parseFloat(transmission.longitude)}}></Marker>
        ))}
      </GoogleMap>
    );
  }

  const MapWrapped = withScriptjs(withGoogleMap(buildMap));

  return (
    <div className="col-10 offset-1 mt-4">
      <h3 className="text-center mb-4">Transmissions Map</h3>
      <div className="mb-5"  ref={mapContainerRef} >
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDrheN9gI_vkz-6YI6JY_FS3y35AIYgVyM`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
};

export default TransmissionsMap;