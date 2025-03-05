import React from 'react';
import './Footer.css'; // Import custom CSS for the footer

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
      <div className="container pb-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-4">
            <div className="bg-primary rounded p-4">
              <a href="index.html">
                <h1 className="text-white text-uppercase mb-3">
                  <img width="100%" height="94" src="travelxadventure.png" alt="TravelxAdventure" />
                </h1>
              </a>
              <p className="text-white mb-0">
                Here at Travel X Adventures, we believe that fulfilling travel experiences begin not only with choosing the right destination but ensuring your travel becomes memorable. The way we see it, life is just one big journey, and we’re here to help people make more enlightening stops along the way.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <h6 className="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Shop No. 4 Estate View Colony Near Lovely Professional University Jalandhar Punjab,144411</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 8288869690, +91-7837280999, +91-01824506969</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>support@travelxadventures.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="row gy-5 g-4">
              <div className="col-md-6">
                <h6 className="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                <a className="btn btn-link" href="about.html">About Us</a>
                <a className="btn btn-link" href="contact.php">Contact Us</a>
                <a className="btn btn-link" href="">Privacy Policy</a>
              </div>
              <div className="col-md-6">
                <h6 className="section-title text-start text-primary text-uppercase mb-4">Services</h6>
                <a className="btn btn-link" href="biker.php">Bike Rental</a>
                <a className="btn btn-link" href="carr.php">Car Rental</a>
                <a className="btn btn-link" href="gearr.php">Gears Rental</a>
                <a className="btn btn-link" href="tourr.php">Tour Packages</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
              Designed By <a className="border-bottom" href="">HTML</a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="">Home</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
  );
};

export default Footer;