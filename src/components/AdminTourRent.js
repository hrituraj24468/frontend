import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminTourRent.css'; // Import custom CSS for the admin tour rent page
import AdminNavbar from './AdminNavbar'; // Import the AdminNavbar component

const AdminTourRent = () => {
  const [tours, setTours] = useState([]);
  const [tour, setTour] = useState('');
  const [sd, setSd] = useState('');
  const [fd, setFd] = useState('');
  const [days, setDays] = useState('');
  const [starts, setStarts] = useState('');
  const [price, setPrice] = useState('');
  const [startsfrom, setStartsfrom] = useState('');
  const [img, setImg] = useState(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/tours');
      setTours(response.data);
    } catch (error) {
      console.error('Error fetching tours:', error);
    }
  };

  const handleAddTour = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const formData = new FormData();
    formData.append('tour', tour);
    formData.append('sd', sd);
    formData.append('fd', fd);
    formData.append('days', days);
    formData.append('starts', starts);
    formData.append('price', price);
    formData.append('startsfrom', startsfrom);
    formData.append('img', img);

    try {
      const response = await axios.post('http://localhost:5001/api/tours', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess('Tour added successfully.');
      fetchTours();
    } catch (error) {
      setError('Error adding tour.');
      console.error('Error adding tour:', error);
    }
  };

  const handleDeleteTour = async (id) => {
    if (window.confirm('Are you sure you want to delete this tour?')) {
      try {
        await axios.delete(`http://localhost:5001/api/tours/${id}`);
        setSuccess('Tour deleted successfully.');
        fetchTours();
      } catch (error) {
        setError('Error deleting tour.');
        console.error('Error deleting tour:', error);
      }
    }
  };

  return (
    <div>
      <AdminNavbar /> {/* Use the AdminNavbar component */}
      <div className="content p-4">
      <div className="container mt-5">
        <h1 className="text-center">Tour Rent Management</h1>

        {/* Success Message */}
        {success && <div className="alert alert-success">{success}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Add Tour Form */}
        <h3>Add New Tour</h3>
        <form onSubmit={handleAddTour} className="mb-5">
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="tour" className="form-label">Tour Name</label>
              <input type="text" name="tour" className="form-control" value={tour} onChange={(e) => setTour(e.target.value)} required />
            </div>
            <div className="col-md-4">
              <label htmlFor="sd" className="form-label">Short Description</label>
              <input type="text" name="sd" className="form-control" value={sd} onChange={(e) => setSd(e.target.value)} required />
            </div>
            <div className="col-md-4">
              <label htmlFor="fd" className="form-label">Full Description</label>
              <textarea name="fd" className="form-control" rows="2" value={fd} onChange={(e) => setFd(e.target.value)} required></textarea>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <label htmlFor="days" className="form-label">Duration (Days)</label>
              <input type="text" name="days" className="form-control" value={days} onChange={(e) => setDays(e.target.value)} required />
            </div>
            <div className="col-md-4">
              <label htmlFor="starts" className="form-label">Start Date</label>
              <input type="text" name="starts" className="form-control" value={starts} onChange={(e) => setStarts(e.target.value)} required />
            </div>
            <div className="col-md-4">
              <label htmlFor="price" className="form-label">Price (₹)</label>
              <input type="text" name="price" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <label htmlFor="startsfrom" className="form-label">Starts From</label>
              <input type="text" name="startsfrom" className="form-control" value={startsfrom} onChange={(e) => setStartsfrom(e.target.value)} required />
            </div>
            <div className="col-md-6">
              <label htmlFor="img" className="form-label">Image</label>
              <input type="file" name="img" className="form-control" onChange={(e) => setImg(e.target.files[0])} />
            </div>
          </div>
          <button type="submit" className="btn btn-success mt-3">Add Tour</button>
        </form>

        {/* Tour List */}
        <h3>Available Tours</h3>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Tour Name</th>
                <th>Short Description</th>
                <th>Full Description</th>
                <th>Duration (Days)</th>
                <th>Start Date</th>
                <th>Price</th>
                <th>Starts From</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tours.map((tour) => (
                <tr key={tour.id}>
                  <td>{tour.tour}</td>
                  <td>{tour.sd}</td>
                  <td>{tour.fd}</td>
                  <td>{tour.days}</td>
                  <td>{tour.starts}</td>
                  <td>{tour.price}</td>
                  <td>{tour.startsfrom}</td>
                  <td><img src={`http://localhost:5001/img/${tour.image}`} width="100" alt="Tour" /></td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTour(tour.id)}>Delete</button>
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

export default AdminTourRent;