import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminBikeRent.css'; // Import custom CSS for the admin bike rent page
import AdminNavbar from './AdminNavbar'; // Import the AdminNavbar component

const AdminBikeRent = () => {
  const [bikes, setBikes] = useState([]);
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
    }
  };

  const handleAddBike = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const formData = new FormData();
    formData.append('bikeNumber', bikeNumber);
    formData.append('cubicCapacity', cubicCapacity);
    formData.append('rentPerDay', rentPerDay);
    formData.append('shortDescription', shortDescription);
    formData.append('fullDescription', fullDescription);
    formData.append('availability', availability);
    formData.append('area', area);
    formData.append('bikeName', bikeName);
    formData.append('img', img);

    try {
      const response = await axios.post('http://localhost:5001/api/bikes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess('Bike added successfully.');
      fetchBikes();
    } catch (error) {
      setError('Error adding bike.');
      console.error('Error adding bike:', error);
    }
  };

  const handleDeleteBike = async (id) => {
    if (window.confirm('Are you sure you want to delete this bike?')) {
      try {
        await axios.delete(`http://localhost:5001/api/bikes/${id}`);
        setSuccess('Bike deleted successfully.');
        fetchBikes();
      } catch (error) {
        setError('Error deleting bike.');
        console.error('Error deleting bike:', error);
      }
    }
  };

  return (
    <div>
      <AdminNavbar /> {/* Use the AdminNavbar component */}
      <div className="content p-4">
        <div className="container mt-5">
          <h1 className="text-center">Bike Rent Management</h1>

          {/* Success Message */}
          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          {/* Add Bike Form */}
          <h3>Add New Bike</h3>
          <form onSubmit={handleAddBike} className="mb-5">
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="bikeNumber" className="form-label">Bike Number</label>
                <input type="text" name="bikeNumber" className="form-control" value={bikeNumber} onChange={(e) => setBikeNumber(e.target.value)} required />
              </div>
              <div className="col-md-4">
                <label htmlFor="cubicCapacity" className="form-label">Cubic Capacity (CC)</label>
                <input type="text" name="cubicCapacity" className="form-control" value={cubicCapacity} onChange={(e) => setCubicCapacity(e.target.value)} required />
              </div>
              <div className="col-md-4">
                <label htmlFor="rentPerDay" className="form-label">Rent per Day (₹)</label>
                <input type="text" name="rentPerDay" className="form-control" value={rentPerDay} onChange={(e) => setRentPerDay(e.target.value)} required />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4">
                <label htmlFor="shortDescription" className="form-label">Short Description</label>
                <input type="text" name="shortDescription" className="form-control" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} required />
              </div>
              <div className="col-md-4">
                <label htmlFor="fullDescription" className="form-label">Full Description</label>
                <textarea name="fullDescription" className="form-control" rows="4" value={fullDescription} onChange={(e) => setFullDescription(e.target.value)} required></textarea>
              </div>
              <div className="col-md-4">
                <label htmlFor="availability" className="form-label">Availability</label>
                <input type="text" name="availability" className="form-control" value={availability} onChange={(e) => setAvailability(e.target.value)} required />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label htmlFor="area" className="form-label">Area</label>
                <select name="area" className="form-control" value={area} onChange={(e) => setArea(e.target.value)} required>
                  <option value="Chandigarh, Punjab">Chandigarh, Punjab</option>
                  <option value="Lawgate, Phagwara, Punjab">Lawgate, Phagwara, Punjab</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="img" className="form-label">Image</label>
                <input type="file" name="img" className="form-control" onChange={(e) => setImg(e.target.files[0])} />
              </div>
              <div className="col-md-12 mt-3">
                <label htmlFor="bikeName" className="form-label">Bike Name</label>
                <input type="text" name="bikeName" className="form-control" value={bikeName} onChange={(e) => setBikeName(e.target.value)} required />
              </div>
            </div>
            <button type="submit" className="btn btn-success mt-3">Add Bike</button>
          </form>

          {/* Bike List */}
          <h3>Available Bikes</h3>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Bike Number</th>
                  <th>Cubic Capacity (CC)</th>
                  <th>Rent per Day</th>
                  <th>Short Description</th>
                  <th>Full Description</th>
                  <th>Availability</th>
                  <th>Area</th>
                  <th>Image</th>
                  <th>Bike Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bikes.map((bike) => (
                  <tr key={bike._id}>
                    <td>{bike._id}</td>
                    <td>{bike.bikeNumber}</td>
                    <td>{bike.cubicCapacity}</td>
                    <td>{bike.rentPerDay}</td>
                    <td>{bike.shortDescription}</td>
                    <td>{bike.fullDescription}</td>
                    <td>{bike.availability ? 'Available' : 'Not Available'}</td>
                    <td>{bike.area}</td>
                    <td><img src={`http://localhost:5001/img/${bike.image}`} width="100" alt="Bike" /></td>
                    <td>{bike.bikeName}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDeleteBike(bike._id)}>Delete</button>
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

export default AdminBikeRent;