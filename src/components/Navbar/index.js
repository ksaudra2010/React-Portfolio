import React from "react";
import "./style.css";
import { Link, } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <header>
        
        <div className='container'> <div className='row'> <div className='col-12'> <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">Audra Kosinski</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                  aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                  <ul className="navbar-nav navbar-right mt-2 mt-lg-0">
                      <li className="navbar-right nav-item active">
                          <Link className="nav-link" to="/about">About<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/portfolio">Portfolio<span className="sr-only">(current)</span></Link>
                          </li>
                  </ul>
                </div>
              </nav></div></div></div>

    </header>
  );
}

export default Navbar;
