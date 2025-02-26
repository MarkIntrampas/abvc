//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Correct import for Bootstrap JS and Popper.js
//import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js'

import { React, Component } from 'react';
import './Nav.css';
import navlogo from "./Nav media/LOGO2.png";

class Nav extends Component {
  render() {
    return (
      <div id="cont">
        {/* Bootstrap Navbar */}
        <nav className="navbar navbar-expand-md navbar-light nav">
          <a className="navbar-brand brand"  href="#"><img id="logo"src={navlogo}></img></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <a className="nav-item nav-link current" href="#">HOME <span className="sr-only"></span></a>
              <a className="nav-item nav-link" href="#">ABOUT US</a>
              <a className="nav-item nav-link" href="#">BLOGS</a>
              <a className="nav-item nav-link" href="#">CONTACTS</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
