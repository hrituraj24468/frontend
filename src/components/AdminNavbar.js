import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTachometerAlt, faBicycle, faCogs, faCar, faSignOutAlt, faHiking, faHotel } from '@fortawesome/free-solid-svg-icons';
import './AdminNavbar.css'; // Import custom CSS for the admin navbar

const AdminNavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`vertical-navbar bg-dark ${isCollapsed ? 'collapsed' : ''}`}>
      <nav className="nav flex-column">
        <Link className="nav-link text-white" to="/admin-tour-rent">
          <FontAwesomeIcon icon={faTachometerAlt} className="icon-left" /> {!isCollapsed && 'Tour Rent'}
        </Link>
        <Link className="nav-link text-white" to="/admin-bike-rent">
          <FontAwesomeIcon icon={faBicycle} className="icon-left" /> {!isCollapsed && 'Bike Rent'}
        </Link>
        <Link className="nav-link text-white" to="/admin-gear-rent">
          <FontAwesomeIcon icon={faCogs} className="icon-left" /> {!isCollapsed && 'Gear Rent'}
        </Link>
        <Link className="nav-link text-white" to="/admin-car-rent">
          <FontAwesomeIcon icon={faCar} className="icon-left" /> {!isCollapsed && 'Car Rent'}
        </Link>
        <Link className="nav-link text-white" to="/admin-adventure-rent">
          <FontAwesomeIcon icon={faHiking} className="icon-left" /> {!isCollapsed && 'Adventure Rent'}
        </Link>
        <Link className="nav-link text-white" to="/admin-hotels">
          <FontAwesomeIcon icon={faHotel} className="icon-left" /> {!isCollapsed && 'Hotels'}
        </Link>
        <div className="mt-auto">
          <button className="btn btn-primary me-2">Admin: {sessionStorage.getItem('user')}</button>
          <button className="btn btn-primary me-2">Login at: {sessionStorage.getItem('lastLogin')}</button>
          <Link to="/logout" className="btn btn-danger">
            <FontAwesomeIcon icon={faSignOutAlt} className="icon-left" /> {!isCollapsed && 'Logout'}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavbar;