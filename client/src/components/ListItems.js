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
    <div>
      <h2>All Entries</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr><th>ID</th><th>Vardas</th><th>Email</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {items.map(i => (
            <tr key={i._id}>
              <td>{i._id}</td>
              <td>{i.vardas}</td>
              <td>{i.email}</td>
              <td>
                <Link to={`/edit/${i._id}`}>Edit</Link> | 
                <button onClick={()=>handleDelete(i._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}