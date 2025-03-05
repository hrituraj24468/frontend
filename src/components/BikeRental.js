import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './BikeRental.css'; // Import custom CSS for the bike rental page
import Footer from './Footer';

const BikeRental = () => {
  const [bikes, setBikes] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [bikeNumber, setBikeNumber] = useState('');
  const [cubicCapacity, setCubicCapacity] = useState('');
  const [rentPerDay, setRentPerDay] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  const [availability, setAvailability] = useState('');
  const [area, setArea] = useState('Chandigarh, Punjab'); // Set a default value for area
  const [bikeName, setBikeName] = useState('');
  const [img, setImg] = useState(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBikes();
  }, []);

  const fetchBikes = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/fetchbikes');
      setBikes(response.data);
    } catch (error) {
      console.error('Error fetching bikes:', error);
      setError('Error fetching bikes');
    }
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const filteredBikes = selectedLocation === 'all' ? bikes : bikes.filter(bike => bike.area === selectedLocation);

  const toggleSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }
  };

  return (
    <div>
      {/* Page Header Start */}
      <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(img/07_02_2024-royal_enfield_hunter_350_accessories__23647775.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '400px' }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown"><i className="fa fa-motorcycle"></i> BIKE</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
                <li className="breadcrumb-item"><Link to="#"><i className="fa fa-book"></i> Booking</Link></li>
                <li className="breadcrumb-item text-white active" aria-current="page"><i className="fa fa-motorcycle"></i> Bike Rentals</li>
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
                      <option value="Delhi"><i className="fa fa-map-marker"></i> Delhi</option>
                      <option value="Manali"><i className="fa fa-map-marker"></i> Manali</option>
                      <option value="Jaisalmer"><i className="fa fa-map-marker"></i> Jaisalmer</option>
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
            <h6 className="section-title text-center text-primary text-uppercase"><i className="fa fa-motorcycle"></i> Our Bikes</h6>
            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase"><i className="fa fa-motorcycle"></i> Bikes</span></h1>
          </div>
          <div className="row g-4">
            {filteredBikes.map((bike, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                <div className="room-item shadow rounded overflow-hidden" style={{ height: '100%' }}>
                  <div className="position-relative bike-image-container" style={{ height: '200px' }}>
                    <img className="img-fluid bike-image" src={`http://localhost:5001/img/${bike.image}`} alt={bike.bikeName} style={{ height: '100%', objectFit: 'cover' }} />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4"><i className="fa fa-inr"></i> {bike.rentPerDay}</small>
                  </div>
                  <div className="p-4 mt-2 d-flex flex-column justify-content-between" style={{ height: 'calc(100% - 200px)' }}>
                    <div>
                      <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0"><i className="fa fa-motorcycle"></i> {bike.bikeName}</h5>
                        <div className="ps-2">
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <small className="border-end me-3 pe-3"><i className="fa fa-motorcycle text-primary me-2"></i>{bike.bikeNumber}</small>
                        <small className="border-end me-3 pe-3"><i className="fa fa-map-marker text-primary me-2"></i>{bike.area}</small>
                        <small><i className="fa fa-cc text-primary me-2"></i>{bike.cubicCapacity}</small>
                      </div>
                      <p className="text-body mb-3"><i className="fa fa-info-circle"></i> {bike.shortDescription}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-sm btn-primary rounded py-2 px-4" onClick={() => toggleSection(`details${bike._id}`)}><i className="fa fa-info-circle"></i> View Detail</button>
                      <button className="btn btn-sm btn-dark rounded py-2 px-4" onClick={() => toggleSection(`book${bike._id}`)}><i className="fa fa-book"></i> Book Now</button>
                    </div>
                    {/* Hidden Sections */}
                    <div id={`details${bike._id}`} className="expandable-section" style={{ display: 'none' }}>
                      <p className="mt-3"><i className="fa fa-info-circle"></i> {bike.fullDescription}</p>
                    </div>
                    <div id={`book${bike._id}`} className="expandable-section" style={{ display: 'none' }}>
                      <form method="POST" action="booking.php" className="mt-3" target="_blank">
                        <div className="mb-2">
                          <label htmlFor={`name${bike._id}`} className="form-label"><i className="fa fa-user"></i> Name</label>
                          <input type="text" className="form-control" id={`name${bike._id}`} name="name" required />
                        </div>
                        <div className="mb-2">
                          <label htmlFor={`email${bike._id}`} className="form-label"><i className="fa fa-envelope"></i> Email</label>
                          <input type="email" className="form-control" id={`email${bike._id}`} name="email" required />
                        </div>
                        <div className="mb-2">
                          <label htmlFor={`number${bike._id}`} className="form-label"><i className="fa fa-phone"></i> Phone Number</label>
                          <input type="text" className="form-control" id={`number${bike._id}`} name="number" required pattern="\d{10}" title="Please enter a valid 10-digit mobile number." />
                        </div>
                        <input type="hidden" name="tablename" value="bikerent" />
                        <input type="hidden" name="id" value={bike._id} />
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

export default BikeRental;