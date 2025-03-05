import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TourRent.css'; // Import custom CSS for the tour rental page
import Footer from './Footer';

const TourRent = () => {
  // Dummy data for tours
  const tours = [
    {
      id: 1,
      name: "Mountain Expedition",
      image: "img/IMG20230728172737.jpg",
      price: "₹15000/day",
      tournumber: "EXP 001",
      area: "Himalayas",
      duration: "7 days",
      sd: "Experience the thrill of mountain expedition with our guided tour.",
      fd: "Full details about Mountain Expedition."
    },
    {
      id: 2,
      name: "Desert Safari",
      image: "img/about-3.jpg",
      price: "₹12000/day",
      tournumber: "EXP 002",
      area: "Rajasthan",
      duration: "5 days",
      sd: "Discover the beauty of the desert with our Desert Safari tour.",
      fd: "Full details about Desert Safari."
    },
    {
      id: 3,
      name: "Beach Adventure",
      image: "img/about-2.jpg",
      price: "₹10000/day",
      tournumber: "EXP 003",
      area: "Goa",
      duration: "3 days",
      sd: "Enjoy the sun and sand with our Beach Adventure tour.",
      fd: "Full details about Beach Adventure."
    }
  ];

  const [selectedLocation, setSelectedLocation] = useState('all');

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const filteredTours = selectedLocation === 'all' ? tours : tours.filter(tour => tour.area === selectedLocation);

  const toggleSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }
  };

  return (
    <div>
      {/* Page Header Start */}
      <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(img/IMG20230728172737.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '400px' }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">TOUR</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="#">Booking</Link></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Tour Rentals</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Booking Start */}
      <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <div className="bg-white shadow" style={{ padding: '35px' }}>
            <div className="row g-2">
              <div className="col-md-8">
                <div className="row g-1">
                  <div className="col-md-2">
                    <div className="date" id="date2" data-target-input="nearest">
                      <h3>Location</h3>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <select className="form-select" id="locationSelect" onChange={handleLocationChange}>
                      <option value="all" selected>All</option>
                      <option value="Himalayas">Himalayas</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Goa">Goa</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking End */}

      {/* Room Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">Our Tours</h6>
            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Tours</span></h1>
          </div>
          <div className="row g-4">
            {filteredTours.map((tour, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                <div className="room-item shadow rounded overflow-hidden" style={{ height: '100%' }}>
                  <div className="position-relative tour-image-container" style={{ height: '200px' }}>
                    <img className="img-fluid tour-image" src={tour.image} alt={tour.name} style={{ height: '100%', objectFit: 'cover' }} />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">{tour.price}</small>
                  </div>
                  <div className="p-4 mt-2 d-flex flex-column justify-content-between" style={{ height: 'calc(100% - 200px)' }}>
                    <div>
                      <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0">{tour.name}</h5>
                      </div>
                      <div className="d-flex mb-3">
                        <small className="border-end me-3 pe-3"><i className="fa fa-map-marker text-primary me-2"></i>{tour.area}</small>
                        <small className="border-end me-3 pe-3"><i className="fa fa-clock text-primary me-2"></i>{tour.duration}</small>
                        <small><i className="fa fa-ticket text-primary me-2"></i>{tour.tournumber}</small>
                      </div>
                      <p className="text-body mb-3">{tour.sd}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-sm btn-primary rounded py-2 px-4" onClick={() => toggleSection(`details${tour.id}`)}>View Detail</button>
                      <button className="btn btn-sm btn-dark rounded py-2 px-4" onClick={() => toggleSection(`book${tour.id}`)}>Book Now</button>
                    </div>
                    {/* Hidden Sections */}
                    <div id={`details${tour.id}`} className="expandable-section" style={{ display: 'none' }}>
                      <p className="mt-3">{tour.fd}</p>
                    </div>
                    <div id={`book${tour.id}`} className="expandable-section" style={{ display: 'none' }}>
                      <form method="POST" action="booking.php" className="mt-3" target="_blank">
                        <div className="mb-2">
                          <label htmlFor={`name${tour.id}`} className="form-label">Name</label>
                          <input type="text" className="form-control" id={`name${tour.id}`} name="name" required />
                        </div>
                        <div className="mb-2">
                          <label htmlFor={`email${tour.id}`} className="form-label">Email</label>
                          <input type="email" className="form-control" id={`email${tour.id}`} name="email" required />
                        </div>
                        <div className="mb-2">
                          <label htmlFor={`number${tour.id}`} className="form-label">Phone Number</label>
                          <input type="text" className="form-control" id={`number${tour.id}`} name="number" required pattern="\d{10}" title="Please enter a valid 10-digit mobile number." />
                        </div>
                        <input type="hidden" name="tablename" value="tourrent" />
                        <input type="hidden" name="id" value={tour.id} />
                        <button type="submit" className="btn btn-primary btn-sm">Book</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Room End */}
      <Footer />
    </div>
  );
};

export default TourRent;