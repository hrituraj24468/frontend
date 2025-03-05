import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminHotels.css'; // Import custom CSS for the admin hotels page
import AdminNavbar from './AdminNavbar'; // Import the AdminNavbar component

const AdminHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [hotelName, setHotelName] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [availability, setAvailability] = useState('');
  const [img, setImg] = useState(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

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

  const handleAddHotel = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const formData = new FormData();
    formData.append('hotelName', hotelName);
    formData.append('location', location);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('availability', availability);
    formData.append('img', img);

    try {
      const response = await axios.post('http://localhost:5001/api/hotels', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess('Hotel added successfully.');
      fetchHotels();
    } catch (error) {
      setError('Error adding hotel.');
      console.error('Error adding hotel:', error);
    }
  };

  const handleDeleteHotel = async (id) => {
    if (window.confirm('Are you sure you want to delete this hotel?')) {
      try {
        await axios.delete(`http://localhost:5001/api/hotels/${id}`);
        setSuccess('Hotel deleted successfully.');
        fetchHotels();
      } catch (error) {
        setError('Error deleting hotel.');
        console.error('Error deleting hotel:', error);
      }
    }
  };

  return (
    <div>
      <AdminNavbar /> {/* Use the AdminNavbar component */}
      <div className="content p-4">
        <div className="container mt-5">
          <h1 className="text-center">Hotel Management</h1>

          {/* Success Message */}
          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          {/* Add Hotel Form */}
          <h3>Add New Hotel</h3>
          <form onSubmit={handleAddHotel} className="mb-5">
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="hotelName" className="form-label">Hotel Name</label>
                <input type="text" name="hotelName" className="form-control" value={hotelName} onChange={(e) => setHotelName(e.target.value)} required />
              </div>
              <div className="col-md-4">
                <label htmlFor="location" className="form-label">Location</label>
                <input type="text" name="location" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} required />
              </div>
              <div className="col-md-4">
                <label htmlFor="price" className="form-label">Price (₹)</label>
                <input type="text" name="price" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea name="description" className="form-control" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
              </div>
              <div className="col-md-6">
                <label htmlFor="availability" className="form-label">Availability</label>
                <input type="text" name="availability" className="form-control" value={availability} onChange={(e) => setAvailability(e.target.value)} required />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label htmlFor="img" className="form-label">Image</label>
                <input type="file" name="img" className="form-control" onChange={(e) => setImg(e.target.files[0])} />
              </div>
            </div>
            <button type="submit" className="btn btn-success mt-3">Add Hotel</button>
          </form>

          {/* Hotel List */}
          <h3>Available Hotels</h3>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Hotel Name</th>
                  <th>Location</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Availability</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {hotels.map((hotel) => (
                  <tr key={hotel._id}>
                    <td>{hotel.hotelName}</td>
                    <td>{hotel.location}</td>
                    <td>{hotel.price}</td>
                    <td>{hotel.description}</td>
                    <td>{hotel.availability}</td>
                    <td><img src={`http://localhost:5001/img/${hotel.image}`} width="100" alt="Hotel" /></td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDeleteHotel(hotel._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHotels;
