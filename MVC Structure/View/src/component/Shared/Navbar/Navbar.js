import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  container">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-light">
          ChefsPoint
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item  mr-5 ">
              <Link to="/" className="nav-link active text-light">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link active  text-light ms-5">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link active  text-light  ms-5">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active text-light ms-5">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link active  text-light ms-5">
                Services
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className=" mt-2 ps-4 pe-4 nav-link active text-black ms-5 btn btn-outline-warning"
              >
                Login
                <FontAwesomeIcon className="ms-2" icon={faSignInAlt} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
