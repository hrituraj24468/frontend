import React from 'react';
import { Link } from 'react-router-dom';
import './BikeRental.css'; // Import custom CSS for the bike rental page

const BikeRental = () => {
  // Dummy data for bikes
  const bikes = [
    {
      name: "Royal Enfield Hunter 350",
      image: "img/07_02_2024-royal_enfield_hunter_350_accessories__23647775.jpg",
      price: "₹5000/tour",
      days: "5 Days",
      starts: "Delhi",
      description: "Explore the beauty of the Himalayas with our Royal Enfield Hunter 350 tour."
    },
    {
      name: "Mountain Adventure",
      image: "img/674aab020e4221.61056965.jpeg",
      price: "₹7000/tour",
      days: "7 Days",
      starts: "Manali",
      description: "Experience the thrill of mountain biking with our Mountain Adventure tour."
    },
    {
      name: "Desert Safari",
      image: "img/67398761c6dc43.70985424.jpeg",
      price: "₹6000/tour",
      days: "6 Days",
      starts: "Jaisalmer",
      description: "Discover the beauty of the desert with our Desert Safari tour."
    }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title text-center text-primary text-uppercase">Our Bikes</h6>
          <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Bikes</span></h1>
        </div>
        <div className="row g-4">
          {bikes.map((bike, index) => (
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
              <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src={bike.image} alt={bike.name} />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">{bike.price}</small>
                </div>
                <div className="p-4 mt-2 tour-box">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{bike.name}</h5>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3"><i className="fa fa-calendar text-primary me-2"></i>{bike.days}</small>
                    <small className="border-end me-3 pe-3"><i className="fa fa-map-marker text-primary me-2"></i>Starts at {bike.starts}</small>
                    <small><i className="fa fa-plane text-primary me-2"></i>From {bike.starts}</small>
                  </div>
                  <p className="text-body mb-3">{bike.description}</p>
                  <div className="d-flex justify-content-between">
                    <Link to={`/bike/${bike.name}`} className="btn btn-sm btn-primary rounded py-2 px-4">View Detail</Link>
                    <button className="btn btn-sm btn-dark rounded py-2 px-4">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BikeRental;