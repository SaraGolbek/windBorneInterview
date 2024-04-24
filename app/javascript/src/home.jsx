// home.jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { safeCredentials, handleErrors } from './fetchHelper';
import Layout from './layout';
import TransmissionForm from './transmissionForm';
import TransmissionsChart from './transmissionsChart';
import TransmissionsMap from './transmissionsMap';
import consumer from '../channels/consumer.js';

const Home = () => {
  const [transmissions, setTransmissions] = useState([]);

  useEffect(() => {
    const subscription = consumer.subscriptions.create("TransmissionsChannel", {
      connected() {
        // Called when the subscription is ready for use on the server
      },

      disconnected() {
        // Called when the subscription has been terminated by the server
      },

      received(data) {
        // Called when there's incoming data on the websocket for this channel
        setTransmissions(prevTransmissions => [...prevTransmissions, data]);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    getTransmissions();
  }, []);

  const getTransmissions = () => {
    fetch('/api/transmissions', safeCredentials({
      method: 'GET',
    }))
      .then(handleErrors)
      .then(data => {
        setTransmissions(data.transmissions);
      })
      .catch(error => {
        console.error('Error fetching transmissions:', error);
      });
  };

  const handleFormSubmit = (transmissionData) => {
    fetch('/api/transmissions', safeCredentials({
      method: 'POST',
      body: JSON.stringify(transmissionData)
    }))
      .then(handleErrors)
      .then(data => {
        getTransmissions();
        console.log(data);
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

          {/*---------- Graph ----------*/}

          <div className="row">
            <TransmissionsChart transmissions={transmissions} />
          </div>

          {/*----------  Map  ----------*/}

          <div className="row">
            <TransmissionsMap transmissions={transmissions} />
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