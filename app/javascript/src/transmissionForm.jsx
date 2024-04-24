//form.jsx
import React, { useState } from 'react';

const TransmissionForm = ({ onSubmit }) => {
  const [altitude, setAltitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({ altitude, latitude, longitude });
    setAltitude('');
    setLatitude('');
    setLongitude('');
  };

  return (
    <div className="col-7 mt-4">
      <form id="transmissionInput" onSubmit={handleFormSubmit}>
        <div className="row mb-4">
          <div className="col-2">
            <label htmlFor="inputAltitude" className="col-form-label">Altitude</label>
          </div>
          <div className="col-9">
            <div className="input-group">
              <input type="number" id="inputAltitude" className="form-control"  value={altitude} onChange={(e) => setAltitude(e.target.value)} required/>
              <span className="input-group-text" id="basic-addon1">ft</span>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-2">
            <label htmlFor="inputLatitude" className="col-form-label">Latitude</label>
          </div>
          <div className="col-9">
            <div className="input-group" >
              <input type="number" className="form-control" id="inputLatitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} required/>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-2">
            <label htmlFor="inputLongitude" className="col-form-label">Longitude</label>
          </div>
          <div className="col-9">
            <input type="number" id="inputLongitude" className="form-control mb-4" value={longitude} onChange={(e) => setLongitude(e.target.value)} required/>
            <button type="submit" className="btn btn-primary float-end" >Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TransmissionForm;
