import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'; // Import custom CSS for the contact page
import Footer from './Footer';

const Contact = () => {
  return (
    <div>
      {/* Page Header Start */}
      <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(img/carousel-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '400px' }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Contact</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">Contact Us</h6>
            <h1 className="mb-5"><span className="text-primary text-uppercase">Contact</span> For Any Query</h1>
          </div>
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                <div className="col-md-4">
                  <h6 className="section-title text-start text-primary text-uppercase">Booking</h6>
                  <p><i className="fa fa-envelope-open text-primary me-2"></i>booking@travelxadventures.com</p>
                </div>
                <div className="col-md-4">
                  <h6 className="section-title text-start text-primary text-uppercase">General</h6>
                  <p><i className="fa fa-envelope-open text-primary me-2"></i>info@travelxadventures.com</p>
                </div>
                <div className="col-md-4">
                  <h6 className="section-title text-start text-primary text-uppercase">Technical</h6>
                  <p><i className="fa fa-envelope-open text-primary me-2"></i>tech@travelxadventures.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <iframe className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d13642.228123916586!2d75.69078204958664!3d31.26068383180196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d31.2668687!2d75.7022562!4m5!1s0x391a5f6d3e99c839%3A0xb5985b960f57997c!2sTravelX%20Adventures%20Pvt.%20Ltd.%2C%20University%20View%20State%20Colony%2C%20Law%20Gate%20Road%2C%20momo&#39;s%20villa%2C%20Phagwara%2C%20Punjab!3m2!1d31.254503099999997!2d75.6978719!5e0!3m2!1sen!2sin!4v1730109987060!5m2!1sen!2sin"
                frameBorder="0" style={{ minHeight: '350px', border: '0' }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }}></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}

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

export default Contact;