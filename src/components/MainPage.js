import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MainPage.css'; // Import custom CSS for the carousel
import Footer from './Footer';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetchBikes();
  }, []);

  const fetchBikes = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/fetchbikes');
      setBikes(response.data);
    } catch (error) {
      console.error('Error fetching bikes:', error);
    }
  };

  return (
    <div>
      <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="carousel-image w-100" src="img/himalyan.webp" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '700px' }}>
                  <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown bold-text">Bike Rental</h6>
                  <h1 className="display-3 text-white mb-4 animated slideInDown bold-text">Your Trip Our Bike</h1>
                  <Link to="/bike-rental" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Bikes</Link>
                  <a href="biker.php" className="btn btn-danger py-md-3 px-md-5 animated slideInRight">Enquiries</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="carousel-image w-100" src="img/IMG20230728172737.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '700px' }}>
                  <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown bold-text">Tour Packages</h6>
                  <h1 className="display-3 text-white mb-4 animated slideInDown bold-text">Your Trip Our Planning</h1>
                  <a href="tourr.php" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Packages</a>
                  <a href="tourr.php" className="btn btn-danger py-md-3 px-md-5 animated slideInRight">Enquiries</a>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container-xxl py-1">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">About Us</h6>
              <h1 className="mb-4">Welcome to <span className="text-primary text-uppercase">Travelx Adventures</span></h1>
              <p className="mb-4">We are a passionate team dedicated to crafting unforgettable travel experiences for our clients.</p>
              <div className="row g-3 pb-4">
                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      <i className="fa fa-plane fa-2x text-primary mb-2"></i>
                      <h2 className="mb-1" data-toggle="counter-up">700</h2>
                      <p className="mb-0">Trips</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      <i className="fa fa-motorcycle fa-2x text-primary mb-2"></i>
                      <h2 className="mb-1" data-toggle="counter-up">+70</h2>
                      <p className="mb-0">Bikes</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      <i className="fa fa-car fa-2x text-primary mb-2"></i>
                      <h2 className="mb-1" data-toggle="counter-up">20</h2>
                      <p className="mb-0">Cars</p>
                    </div>
                  </div>
                </div>
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="">Explore More</a>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="img/about-1.jpg" style={{ marginTop: '25%' }} />
                </div>
                <div className="col-6 text-start">
                  <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="img/about-2.jpg" />
                </div>
                <div className="col-6 text-end">
                  <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="img/about-3.jpg" />
                </div>
                <div className="col-6 text-start">
                  <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="img/about-4.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section End */}

      {/* Tour Rent Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase"><i className="fa fa-motorcycle"></i> Our Bikes</h6>
            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase"><i className="fa fa-motorcycle"></i> Bikes</span></h1>
          </div>
          <div className="row g-4">
            {bikes.map((bike, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                <div className="bike-box shadow rounded overflow-hidden" style={{ height: '100%' }}>
                  <div className="position-relative bike-image-container" style={{ height: '200px' }}>
                    <img className="img-fluid bike-image" src={`http://localhost:5001/img/${bike.image}`} alt={bike.bikeName} style={{ height: '100%', objectFit: 'cover' }} />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4"><i className="fa fa-inr"></i> {bike.rentPerDay}</small>
                  </div>
                  <div className="p-4 mt-2 d-flex flex-column justify-content-between" style={{ height: 'calc(100% - 200px)' }}>
                    <div>
                      <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0"><i className="fa fa-motorcycle"></i> {bike.bikeName}</h5>
                      </div>
                      <p className="text-body mb-3"><i className="fa fa-info-circle"></i> {bike.shortDescription}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <Link to={`/Bike/${bike._id}`} className="btn btn-sm btn-primary rounded py-2 px-4"><i className="fa fa-info-circle"></i> View Detail</Link>
                      <button className="btn btn-sm btn-dark rounded py-2 px-4"><i className="fa fa-book"></i> Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;