// home.jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { safeCredentials, handleErrors } from './fetchHelper';
import Layout from './layout';
import TransmissionForm from './transmissionForm';

const Home = () => {

  const handleFormSubmit = (transmissionData) => {
    fetch('/api/transmissions', safeCredentials({
      method: 'POST',
      body: JSON.stringify(transmissionData)
    }))
      .then(handleErrors)
      .then(data => {
        getTransmissions();
      })
      .catch(error => {
        console.error('Error submitting transmission:', error);
      });
  };

  return(
    <Layout>
      <div className="row g-3 align-items-center">
        <div className="col-12">
          <h1 className="text-center mb-5 mt-4">Mission Control</h1>

            {/*----- Transmission Form -----*/}

          <div className="row">
            <div className="col-5 mt-4">
              <h2 className="mb-3">Transmissions</h2>
              <p style={{textIndent: "2em"}}>Please fill out the form to create a new transmission. In order to create a successful transmission you need to include an altitude, latitude, and longitude.</p>
            </div>
            <TransmissionForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})