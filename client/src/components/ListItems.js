import React, { useState, useEffect } from 'react';
import { Link }                       from 'react-router-dom';
import axios                           from 'axios';

const url = 'http://localhost:3000';

export default function ListItems() {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`/api/form`);
      setItems(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async id => {
    if (window.confirm('Delete?')) {
      await axios.delete(`/api/form/${id}`);
      fetchData();
    }
  };

  useEffect(() => { fetchData() }, []);

  return (
    <div className="container mt-4">
      <h2>All Entries</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Vardas</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map(i => (
              <tr key={i._id}>
                <td>{i._id}</td>
                <td>{i.vardas}</td>
                <td>{i.email}</td>
                <td>
                  <Link to={`/edit/${i._id}`} className="btn btn-sm btn-primary me-2">
                    Edit
                  </Link>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(i._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}