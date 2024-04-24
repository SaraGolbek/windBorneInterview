// layout.jsx
import React from 'react';

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-light bg-light sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">WindBorne</a>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#transmissionInput">Form</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#altitudeChart">Graph</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#map">Map</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container py-3">
        {props.children}
      </div>
      <footer className="p-3 bg-light fixed-bottom">
        <div className="container">
          <span className="me-3 text-secondary">Created By Sara Golbek</span>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;