import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminGearRent.css'; // Import custom CSS for the admin gear rent page
import AdminNavbar from './AdminNavbar'; // Import the AdminNavbar component

const AdminGearRent = () => {
  const [gearList, setGearList] = useState([]);
  const [gearname, setGearname] = useState('');
  const [geartype, setGeartype] = useState('');
  const [rpd, setRpd] = useState('');
  const [sd, setSd] = useState('');
  const [fd, setFd] = useState('');
  const [availability, setAvailability] = useState('');
  const [area, setArea] = useState('');
  const [cndtn, setCndtn] = useState('');
  const [img, setImg] = useState(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchGear();
  }, []);

  const fetchGear = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/fetchgear');
      setGearList(response.data);
    } catch (error) {
      console.error('Error fetching gear:', error);
    }
  };

  const handleAddGear = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const formData = new FormData();
    formData.append('gearname', gearname);
    formData.append('geartype', geartype);
    formData.append('rpd', rpd);
    formData.append('sd', sd);
    formData.append('fd', fd);
    formData.append('availability', availability);
    formData.append('area', area);
    formData.append('cndtn', cndtn);
    formData.append('img', img);

    try {
      const response = await axios.post('http://localhost:5001/api/gear', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess('Gear added successfully.');
      fetchGear();
    } catch (error) {
      setError('Error adding gear.');
      console.error('Error adding gear:', error);
    }
  };

  const handleDeleteGear = async (id) => {
    if (window.confirm('Are you sure you want to delete this gear?')) {
      try {
        await axios.delete(`http://localhost:5001/api/gear/${id}`);
        setSuccess('Gear deleted successfully.');
        fetchGear();
      } catch (error) {
        setError('Error deleting gear.');
        console.error('Error deleting gear:', error);
      }
    }
  };

  return (
    <div>
      <AdminNavbar /> {/* Use the AdminNavbar component */}
      <div className="content p-4">
      <div className="container mt-5">
        <h1 className="text-center">Gear Rent Management</h1>

        {/* Success Message */}
        {success && <div className="alert alert-success">{success}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Add Gear Form */}
        <h3>Add New Gear</h3>
        <form onSubmit={handleAddGear} className="mb-5">
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="gearname" className="form-label">Gear Name</label>
              <input type="text" name="gearname" className="form-control" value={gearname} onChange={(e) => setGearname(e.target.value)} required />
            </div>
            <div className="col-md-4">
              <label htmlFor="geartype" className="form-label">Gear Type</label>
              <input type="text" name="geartype" className="form-control" value={geartype} onChange={(e) => setGeartype(e.target.value)} required />
            </div>
            <div className="col-md-4">
              <label htmlFor="rpd" className="form-label">Rent per Day (₹)</label>
              <input type="text" name="rpd" className="form-control" value={rpd} onChange={(e) => setRpd(e.target.value)} required />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <label htmlFor="sd" className="form-label">Short Description</label>
              <input type="text" name="sd" className="form-control" value={sd} onChange={(e) => setSd(e.target.value)} required />
            </div>
            <div className="col-md-4">
              <label htmlFor="fd" className="form-label">Full Description</label>
              <textarea name="fd" className="form-control" rows="4" value={fd} onChange={(e) => setFd(e.target.value)} required></textarea>
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
            <div className="col-md-4">
              <label htmlFor="cndtn" className="form-label">Condition</label>
              <input type="text" name="cndtn" className="form-control" value={cndtn} onChange={(e) => setCndtn(e.target.value)} required />
            </div>
            <div className="col-md-4">
              <label htmlFor="img" className="form-label">Image</label>
              <input type="file" name="img" className="form-control" onChange={(e) => setImg(e.target.files[0])} />
            </div>
          </div>
          <button type="submit" className="btn btn-success mt-3">Add Gear</button>
        </form>

        {/* Gear List */}
        <h3>Available Gear</h3>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Gear Name</th>
                <th>Gear Type</th>
                <th>Rent per Day</th>
                <th>Short Description</th>
                <th>Full Description</th>
                <th>Availability</th>
                <th>Area</th>
                <th>Image</th>
                <th>Condition</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {gearList.map((gear) => (
                <tr key={gear.id}>
                  <td>{gear.gearname}</td>
                  <td>{gear.geartype}</td>
                  <td>₹{gear.rpd}</td>
                  <td>{gear.sd}</td>
                  <td>{gear.fd}</td>
                  <td>{gear.availability}</td>
                  <td>{gear.area}</td>
                  <td><img src={`http://localhost:5001/img/${gear.img}`} alt="Gear" className="img-thumbnail" width="100" /></td>
                  <td>{gear.cndtn}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDeleteGear(gear.id)}>Delete</button>
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

export default AdminGearRent;