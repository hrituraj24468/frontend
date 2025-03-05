import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Hotels.css'; // Import custom CSS for the hotels page
import Footer from './Footer';

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('all');

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/fetchhotels');
      setHotels(response.data);
    } catch (error) {
      console.error('Error fetching hotels:', error);
    }
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const filteredHotels = selectedLocation === 'all' ? hotels : hotels.filter(hotel => hotel.location === selectedLocation);

  const toggleSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }
  };

  return (
    <div>
      {/* Page Header Start */}
      <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(img/31204963.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '400px' }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown"><i className="fa fa-hotel"></i> HOTELS</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
                <li className="breadcrumb-item"><Link to="#"><i className="fa fa-book"></i> Booking</Link></li>
                <li className="breadcrumb-item text-white active" aria-current="page"><i className="fa fa-hotel"></i> Hotels</li>
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
                      <h3><i className="fa fa-map-marker"></i> Location</h3>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <select className="form-select" id="locationSelect" onChange={handleLocationChange} defaultValue="all">
                      <option value="all"><i className="fa fa-globe"></i> All</option>
                      {hotels.map((hotel, index) => (
                        <option key={index} value={hotel.location}>{hotel.location}</option>
                      ))}
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
            <h6 className="section-title text-center text-primary text-uppercase"><i className="fa fa-hotel"></i> Our Hotels</h6>
            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase"><i className="fa fa-hotel"></i> Hotels</span></h1>
          </div>
          <div className="row g-4">
            {filteredHotels.map((hotel, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                <div className="room-item shadow rounded overflow-hidden" style={{ height: '100%' }}>
                  <div className="position-relative hotel-image-container" style={{ height: '200px' }}>
                    <img className="img-fluid hotel-image" src={`http://localhost:5001/img/${hotel.image}`} alt={hotel.hotelName} style={{ height: '100%', objectFit: 'cover' }} />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4"><i className="fa fa-inr"></i> {hotel.price}</small>
                  </div>
                  <div className="p-4 mt-2 d-flex flex-column justify-content-between" style={{ height: 'calc(100% - 200px)' }}>
                    <div>
                      <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0"><i className="fa fa-hotel"></i> {hotel.hotelName}</h5>
                      </div>
                      <div className="d-flex mb-3">
                        <small className="border-end me-3 pe-3"><i className="fa fa-map-marker text-primary me-2"></i>{hotel.location}</small>
                        <small className="border-end me-3 pe-3"><i className="fa fa-star text-primary me-2"></i>{hotel.availability}</small>
                        <small><i className="fa fa-hotel text-primary me-2"></i>{hotel._id}</small>
                      </div>
                      <p className="text-body mb-3"><i className="fa fa-info-circle"></i> {hotel.description}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-sm btn-primary rounded py-2 px-4" onClick={() => toggleSection(`details${hotel._id}`)}><i className="fa fa-info-circle"></i> View Detail</button>
                      <button className="btn btn-sm btn-dark rounded py-2 px-4" onClick={() => toggleSection(`book${hotel._id}`)}><i className="fa fa-book"></i> Book Now</button>
                    </div>
                    {/* Hidden Sections */}
                    <div id={`details${hotel._id}`} className="expandable-section" style={{ display: 'none' }}>
                      <p className="mt-3"><i className="fa fa-info-circle"></i> {hotel.description}</p>
                    </div>
                    <div id={`book${hotel._id}`} className="expandable-section" style={{ display: 'none' }}>
                      <form method="POST" action="booking.php" className="mt-3" target="_blank">
                        <div className="mb-2">
                          <label htmlFor={`name${hotel._id}`} className="form-label"><i className="fa fa-user"></i> Name</label>
                          <input type="text" className="form-control" id={`name${hotel._id}`} name="name" required />
                        </div>
                        <div className="mb-2">
                          <label htmlFor={`email${hotel._id}`} className="form-label"><i className="fa fa-envelope"></i> Email</label>
                          <input type="email" className="form-control" id={`email${hotel._id}`} name="email" required />
                        </div>
                        <div className="mb-2">
                          <label htmlFor={`number${hotel._id}`} className="form-label"><i className="fa fa-phone"></i> Phone Number</label>
                          <input type="text" className="form-control" id={`number${hotel._id}`} name="number" required pattern="\d{10}" title="Please enter a valid 10-digit mobile number." />
                        </div>
                        <input type="hidden" name="tablename" value="hotelrent" />
                        <input type="hidden" name="id" value={hotel._id} />
                        <button type="submit" className="btn btn-primary btn-sm"><i className="fa fa-book"></i> Book</button>
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

export default Hotels;