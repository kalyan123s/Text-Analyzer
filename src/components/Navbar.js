import React from "react";
import PropTypes from "prop-types";
// import { useState } from 'react'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.aboutText}
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
            {/* <!-- ====Night Mode Toggle button=====--> */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} my-1`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleDark}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
            {/* <!--====Night Mode button Ends=====--> */}
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  textmode:PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: "set title here",
  aboutText: "About text here",
};
