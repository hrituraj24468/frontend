import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Adventures.css'; // Import custom CSS for the adventures page
import Footer from './Footer';

const Adventures = () => {
  const [adventures, setAdventures] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchAdventures();
  }, []);

  const fetchAdventures = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/fetchadventures');
      setAdventures(response.data);
      const uniqueLocations = [...new Set(response.data.map(adventure => adventure.area))];
      setLocations(uniqueLocations);
    } catch (error) {
      console.error('Error fetching adventures:', error);
    }
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const filteredAdventures = selectedLocation === 'all' ? adventures : adventures.filter(adventure => adventure.area === selectedLocation);

  const toggleSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }
  };

  return (
    <div>
      {/* Page Header Start */}
      <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(img/Adventure-Trip-Near-Delhi-.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '400px' }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown"><i className="fa fa-hiking"></i> ADVENTURE</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
                <li className="breadcrumb-item"><Link to="#"><i className="fa fa-book"></i> Booking</Link></li>
                <li className="breadcrumb-item text-white active" aria-current="page"><i className="fa fa-hiking"></i> Adventures</li>
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
                      {locations.map((location, index) => (
                        <option key={index} value={location}>{location}</option>
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
            <h6 className="section-title text-center text-primary text-uppercase"><i className="fa fa-hiking"></i> Our Adventures</h6>
            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase"><i className="fa fa-hiking"></i> Adventures</span></h1>
          </div>
          <div className="row g-4">
            {filteredAdventures.map((adventure, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                <div className="room-item shadow rounded overflow-hidden" style={{ height: '100%' }}>
                  <div className="position-relative adventure-image-container" style={{ height: '200px' }}>
                    <img className="img-fluid adventure-image" src={`http://localhost:5001/img/${adventure.image}`} alt={adventure.name} style={{ height: '100%', objectFit: 'cover' }} />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4"><i className="fa fa-inr"></i> {adventure.price}</small>
                  </div>
                  <div className="p-4 mt-2 d-flex flex-column justify-content-between" style={{ height: 'calc(100% - 200px)' }}>
                    <div>
                      <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0"><i className="fa fa-hiking"></i> {adventure.adventure}</h5>
                      </div>
                      <div className="d-flex mb-3">
                        <small className="border-end me-3 pe-3"><i className="fa fa-map-marker text-primary me-2"></i>{adventure.area}</small>
                        <small className="border-end me-3 pe-3"><i className="fa fa-clock text-primary me-2"></i>{adventure.days}</small>
                        <small><i className="fa fa-ticket text-primary me-2"></i>{adventure._id}</small>
                      </div>
                      <p className="text-body mb-3"><i className="fa fa-info-circle"></i> {adventure.sd}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-sm btn-primary rounded py-2 px-4" onClick={() => toggleSection(`details${adventure._id}`)}><i className="fa fa-info-circle"></i> View Detail</button>
                      <button className="btn btn-sm btn-dark rounded py-2 px-4" onClick={() => toggleSection(`book${adventure._id}`)}><i className="fa fa-book"></i> Book Now</button>
                    </div>
                    {/* Hidden Sections */}
                    <div id={`details${adventure._id}`} className="expandable-section" style={{ display: 'none' }}>
                      <p className="mt-3"><i className="fa fa-info-circle"></i> {adventure.fd}</p>
                    </div>
                    <div id={`book${adventure._id}`} className="expandable-section" style={{ display: 'none' }}>
                      <form method="POST" action="booking.php" className="mt-3" target="_blank">
                        <div className="mb-2">
                          <label htmlFor={`name${adventure._id}`} className="form-label"><i className="fa fa-user"></i> Name</label>
                          <input type="text" className="form-control" id={`name${adventure._id}`} name="name" required />
                        </div>
                        <div className="mb-2">
                          <label htmlFor={`email${adventure._id}`} className="form-label"><i className="fa fa-envelope"></i> Email</label>
                          <input type="email" className="form-control" id={`email${adventure._id}`} name="email" required />
                        </div>
                        <div className="mb-2">
                          <label htmlFor={`number${adventure._id}`} className="form-label"><i className="fa fa-phone"></i> Phone Number</label>
                          <input type="text" className="form-control" id={`number${adventure._id}`} name="number" required pattern="\d{10}" title="Please enter a valid 10-digit mobile number." />
                        </div>
                        <input type="hidden" name="tablename" value="adventurerent" />
                        <input type="hidden" name="id" value={adventure._id} />
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

export default Adventures;