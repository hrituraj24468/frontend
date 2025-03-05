import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminCarRent.css'; // Import custom CSS for the admin car rent page
import AdminNavbar from './AdminNavbar'; // Import the AdminNavbar component

const AdminCarRent = () => {
  const [cars, setCars] = useState([]);
  const [carnumber, setCarnumber] = useState('');
  const [cc, setCc] = useState('');
  const [rpd, setRpd] = useState('');
  const [sd, setSd] = useState('');
  const [fd, setFd] = useState('');
  const [availability, setAvailability] = useState('');
  const [area, setArea] = useState('');
  const [name, setName] = useState('');
  const [img, setImg] = useState(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/fetchcars');
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  const handleAddCar = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const formData = new FormData();
    formData.append('carnumber', carnumber);
    formData.append('cc', cc);
    formData.append('rpd', rpd);
    formData.append('sd', sd);
    formData.append('fd', fd);
    formData.append('availability', availability);
    formData.append('area', area);
    formData.append('name', name);
    formData.append('img', img);

    try {
      const response = await axios.post('http://localhost:5001/api/cars', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess('Car added successfully.');
      fetchCars();
    } catch (error) {
      setError('Error adding car.');
      console.error('Error adding car:', error);
    }
  };

  const handleDeleteCar = async (id) => {
    if (window.confirm('Are you sure you want to delete this car?')) {
      try {
        await axios.delete(`http://localhost:5001/api/cars/${id}`);
        setSuccess('Car deleted successfully.');
        fetchCars();
      } catch (error) {
        setError('Error deleting car.');
        console.error('Error deleting car:', error);
      }
    }
  };

  return (
    <div>
      <AdminNavbar /> {/* Use the AdminNavbar component */}
      <div className="container mt-5">
      <div className="content p-4">
        <h1 className="text-center">Car Rent Management</h1>

        {/* Success Message */}
        {success && <div className="alert alert-success">{success}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Add Car Form */}
        <h3>Add New Car</h3>
        <form onSubmit={handleAddCar} className="mb-5">
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="carnumber" className="form-label">Car Number</label>
              <input type="text" name="carnumber" className="form-control" value={carnumber} onChange={(e) => setCarnumber(e.target.value)} required />
            </div>
            <div className="col-md-4">
              <label htmlFor="cc" className="form-label">Cubic Capacity (CC)</label>
              <input type="text" name="cc" className="form-control" value={cc} onChange={(e) => setCc(e.target.value)} required />
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
            <div className="col-md-6">
              <label htmlFor="img" className="form-label">Image</label>
              <input type="file" name="img" className="form-control" onChange={(e) => setImg(e.target.files[0])} />
            </div>
            <div className="col-md-12 mt-3">
              <label htmlFor="name" className="form-label">Car Name</label>
              <input type="text" name="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
          </div>
          <button type="submit" className="btn btn-success mt-3">Add Car</button>
        </form>

        {/* Car List */}
        <h3>Available Cars</h3>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Car Number</th>
                <th>CC</th>
                <th>Rent per Day</th>
                <th>Short Description</th>
                <th>Full Description</th>
                <th>Availability</th>
                <th>Area</th>
                <th>Image</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr key={car._id}>
                  <td>{car.carnumber}</td>
                  <td>{car.cc}</td>
                  <td>{car.rpd}</td>
                  <td>{car.sd}</td>
                  <td>{car.fd}</td>
                  <td>{car.availability}</td>
                  <td>{car.area}</td>
                  <td><img src={`http://localhost:5001/img/${car.img}`} alt="Car" width="100" /></td>
                  <td>{car.name}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDeleteCar(car._id)}>Delete</button>
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

export default AdminCarRent;