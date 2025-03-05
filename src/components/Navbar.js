import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Import the custom CSS file

const Navbar = () => {
  return (
    <div className="container-fluid bg-blue px-0 sticky-top">
      <div className="row gx-0">
        <div className="col-lg-3 bg-white d-none d-lg-block">
          <Link to="/" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
            <h1 className="m-0 text-primary text-uppercase">
              <img
                width="335"
                height="94"
                src="travelxadventure.png"
                alt="TravelxAdventure"
              />
            </h1>
          </Link>
        </div>
        <div className="col-lg-9">
          <div className="row gx-0 bg-white d-none d-lg-flex">
            <div className="col-lg-7 px-1 text-start">
              <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                <i className="fa fa-envelope text-primary me-2"></i>
                <p className="mb-0">info@travelxadventures.com</p>
              </div>
              <div className="h-100 d-inline-flex align-items-center py-2">
                <i className="fa fa-phone-alt text-primary me-2"></i>
                <p className="mb-0">01824506969</p>
              </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
              <div className="d-inline-flex align-items-center py-2">
                <a className="me-3" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="me-3" href=""><i className="fab fa-twitter"></i></a>
                <a className="me-3" href="https://www.linkedin.com/company/travelx-adventures-pvt-ltd/about/"><i className="fab fa-linkedin-in"></i></a>
                <a className="me-3" href="https://www.instagram.com/travelxadv/"><i className="fab fa-instagram"></i></a>
                <a className="" href="https://www.youtube.com/@TravelXAdventures"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg bg-white navbar-dark p-3 p-lg-0">
            <Link to="/" className="navbar-brand d-block d-lg-none">
              <h1 className="m-0 text-primary text-uppercase">
                <img
                  width="100%"
                  height="54"
                  src="travelxadventure.png"
                  alt="TravelxAdventure"
                />
              </h1>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav mr-auto py-0">
                <Link to="/" className="nav-link black-text active">Home</Link>
                <Link to="/tour-packages" className="nav-link black-text">Tour Packages</Link>
                <Link to="/bike-rental" className="nav-link black-text">Bikes Rental</Link>
                <Link to="/car-rental" className="nav-link black-text">Car Rental</Link>
                <Link to="/gear-rental" className="nav-link black-text">Gears Rental</Link>
                <Link to="/adventures" className="nav-link black-text">Adventures</Link>
                <Link to="/hotels" className="nav-link black-text">Hotel</Link>
                <Link to="/contact" className="nav-link black-text">Contact</Link>
                <Link to="/about" className="nav-link black-text">About Us</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;