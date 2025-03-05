import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminAdventureRent.css'; // Import custom CSS for the admin adventure rent page
import AdminNavbar from './AdminNavbar'; // Import the AdminNavbar component

const AdminAdventureRent = () => {
  const [adventures, setAdventures] = useState([]);
  const [adventure, setAdventure] = useState('');
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
    fetchAdventures();
  }, []);

  const fetchAdventures = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/fetchadventures');
      setAdventures(response.data);
    } catch (error) {
      console.error('Error fetching adventures:', error);
    }
  };

  const handleAddAdventure = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const formData = new FormData();
    formData.append('adventure', adventure);
    formData.append('sd', sd);
    formData.append('fd', fd);
    formData.append('days', days);
    formData.append('starts', starts);
    formData.append('price', price);
    formData.append('startsfrom', startsfrom);
    formData.append('img', img);

    try {
      const response = await axios.post('http://localhost:5001/api/adventures', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess('Adventure added successfully.');
      fetchAdventures();
    } catch (error) {
      setError('Error adding adventure.');
      console.error('Error adding adventure:', error);
    }
  };

  const handleDeleteAdventure = async (id) => {
    if (window.confirm('Are you sure you want to delete this adventure?')) {
      try {
        await axios.delete(`http://localhost:5001/api/adventures/${id}`);
        setSuccess('Adventure deleted successfully.');
        fetchAdventures();
      } catch (error) {
        setError('Error deleting adventure.');
        console.error('Error deleting adventure:', error);
      }
    }
  };

  return (
    <div>
      <AdminNavbar /> {/* Use the AdminNavbar component */}
      <div className="content p-4">
        <div className="container mt-5">
          <h1 className="text-center">Adventure Rent Management</h1>

          {/* Success Message */}
          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          {/* Add Adventure Form */}
          <h3>Add New Adventure</h3>
          <form onSubmit={handleAddAdventure} className="mb-5">
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="adventure" className="form-label">Adventure Name</label>
                <input type="text" name="adventure" className="form-control" value={adventure} onChange={(e) => setAdventure(e.target.value)} required />
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
            <button type="submit" className="btn btn-success mt-3">Add Adventure</button>
          </form>

          {/* Adventure List */}
          <h3>Available Adventures</h3>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Adventure Name</th>
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
                {adventures.map((adventure) => (
                  <tr key={adventure.id}>
                    <td>{adventure.adventure}</td>
                    <td>{adventure.sd}</td>
                    <td>{adventure.fd}</td>
                    <td>{adventure.days}</td>
                    <td>{adventure.starts}</td>
                    <td>{adventure.price}</td>
                    <td>{adventure.startsfrom}</td>
                    <td><img src={`http://localhost:5001/img/${adventure.image}`} width="100" alt="Adventure" /></td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDeleteAdventure(adventure.id)}>Delete</button>
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

export default AdminAdventureRent;
