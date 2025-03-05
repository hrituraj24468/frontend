import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // Import custom CSS for the about page
import Footer from './Footer';

const About = () => {
  return (
    <div>
      {/* Page Header Start */}
      <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(img/carousel-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '400px' }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                <li className="breadcrumb-item text-white active" aria-current="page">About</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">About Us</h6>
              <h1 className="mb-4">Welcome to <span className="text-primary text-uppercase">TravelxAdventure</span></h1>
              <p className="mb-4">Welcome to TravelX Adventures, your trusted travel partner for creating unforgettable journeys! We specialize in providing hassle-free travel solutions that cater to every adventurer's needs. Whether you're seeking the thrill of a self-drive road trip, the comfort of guided tour packages across India, or the excitement of exploring international destinations, we've got you covered.</p>
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
                  <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="img/673c4da831e8d4.16559160.webp" style={{ marginTop: '25%' }} />
                </div>
                <div className="col-6 text-start">
                  <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="img/6739ab7e096793.29695467.jpg" />
                </div>
                <div className="col-6 text-end">
                  <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="img/pexels-andiravsanjani-1915149.jpg" />
                </div>
                <div className="col-6 text-start">
                  <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="img/07_02_2024-royal_enfield_hunter_350_accessories__23647775.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Additional Sections */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">Who We Are</h6>
              <p className="mb-4">At TravelX Adventures, we believe travel is not just about reaching a destination—it's about the stories you create along the way. Founded with a passion for wanderlust and a commitment to exceptional service, we aim to make every journey seamless, memorable, and tailored to your preferences.</p>
            </div>
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">What We Offer</h6>
              <p className="mb-4">Self-Drive Rentals: Choose from a wide range of well-maintained bikes and cars to explore India at your own pace. From the rugged terrains of Ladakh to the serene beaches of Goa, your journey begins with the freedom of self-drive.</p>
              <p className="mb-4">Customized Tour Packages: Whether it’s a weekend getaway, a family vacation, or a cultural exploration, our all-inclusive tour packages ensure a worry-free experience.</p>
              <p className="mb-4">International Land Packages: Dreaming of international travel? Our expertly curated land packages cover popular destinations worldwide, offering an immersive experience in every corner of the globe.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">Why Choose Us?</h6>
              <p className="mb-4">Wide Range of Vehicles: From luxury cars to adventure bikes, our fleet is designed to meet diverse travel needs.</p>
              <p className="mb-4">Tailored Experiences: Our packages are crafted with care, ensuring they match your interests, budget, and travel style.</p>
              <p className="mb-4">Trusted Support: With 24/7 assistance, we are always here to ensure your journey goes smoothly.</p>
              <p className="mb-4">Affordable Pricing: Explore the world without breaking the bank, thanks to our competitive pricing and transparent policies.</p>
            </div>
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">Our Mission</h6>
              <p className="mb-4">To inspire, empower, and make travel accessible to everyone by delivering unparalleled experiences that turn dreams into reality.</p>
              <p className="mb-4">Get in Touch: Ready to start your adventure? Let TravelX Adventures help you write your next travel story! Contact us today to plan your dream trip.</p>
              <p className="mb-4">Explore. Experience. Enjoy – with TravelX Adventures.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Additional Sections End */}

      {/* Newsletter Start */}
      <div className="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="row justify-content-center">
          <div className="col-lg-10 border rounded p-1">
            <div className="border rounded text-center p-1">
              <div className="bg-white rounded text-center p-5">
                <h4 className="mb-4">Subscribe Our <span className="text-primary text-uppercase">Newsletter</span></h4>
                <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                  <input className="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                  <button type="button" className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter End */}

      <Footer />
    </div>
  );
};

export default About;