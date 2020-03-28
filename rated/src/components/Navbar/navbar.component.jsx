import React from 'react';
import './navbar.styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import ToggleSwitch from '../ToggleSwitch/toggleSwitch.component';

library.add(faSearch, faUserCircle);

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="/">
                pricing
              </a>
            </li>
            <li className="nav-item last-item">
              <a className="nav-link text-uppercase" href="/">
                about
              </a>
            </li>
          </ul>
          <input type="text" class="form-control" id="usr" />
          <ul className="navbar-nav ml-auto">
            <li className="nav-item user-icon-item">
              <a className="nav-link" href="/">
                <FontAwesomeIcon icon="user-circle" className="user-icon" />
              </a>
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
