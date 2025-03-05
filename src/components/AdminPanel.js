import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar'; // Import the AdminNavbar component
import './AdminPanel.css'; // Import custom CSS for the admin panel

const AdminPanel = () => {
  const [tableName, setTableName] = useState('tourrent');
  const [bookings, setBookings] = useState([]);
  const [index, setIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 10;
  const navigate = useNavigate();

  useEffect(() => {
    // Check if session exists
    const checkSession = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/session', {
          credentials: 'include'
        });
        if (response.ok) {
          const data = await response.json();
          console.log('Session exists for user:', data.user);
        } else {
          // If no session, redirect to login page
          navigate('/login');
        }
      } catch (error) {
        console.error('Error checking session:', error);
        navigate('/login'); // Redirect to login on error
      }
    };

    checkSession();
  }, [navigate]);

  useEffect(() => {
    // Fetch bookings data
    const fetchBookings = async () => {
      try {
        const response = await fetch(`http://localhost:5000/bookings?tablename=${tableName}&limit=${limit}&offset=${index * limit}`);
        const data = await response.json();
        setBookings(data.bookings);
        setTotalPages(Math.ceil(data.total / limit));
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, [tableName, index]);

  const handleTableChange = (event) => {
    setTableName(event.target.value);
    setIndex(0); // Reset pagination index
  };

  return (
    <div className="d-flex">
      <AdminNavbar /> {/* Use the AdminNavbar component */}
      <div className="content p-4">
        <div className="container mt-5">
          <h1 className="text-center">Admin Panel</h1>
          <div className="mb-3">
            <label htmlFor="tableSelect" className="form-label">Select Table</label>
            <select id="tableSelect" className="form-select" value={tableName} onChange={handleTableChange}>
              <option value="tourrent">Tour Rent</option>
              <option value="bikerent">Bike Rent</option>
              <option value="gearrent">Gear Rent</option>
              <option value="carrent">Car Rent</option>
            </select>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Booking Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.id}</td>
                    <td>{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>{booking.phone}</td>
                    <td>{booking.bookingDate}</td>
                    <td>
                      <button className="btn btn-danger btn-sm">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary" onClick={() => setIndex(index - 1)} disabled={index === 0}>Previous</button>
            <button className="btn btn-primary" onClick={() => setIndex(index + 1)} disabled={index + 1 >= totalPages}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;