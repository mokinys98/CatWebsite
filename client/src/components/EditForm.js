import React, { useState, useEffect } from 'react';
import { useParams, useNavigate }      from 'react-router-dom';
import axios                            from 'axios';

export default function EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vardas, setVardas]   = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`/api/form/${id}`)
      .then(res => {
        setVardas(res.data.vardas);
        setEmail(res.data.email);
        setMessage(res.data.message || '');
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(`/api/form/${id}`, { vardas, email, message });
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Error updating');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Entry</h2>
      <div>
        <label>Vardas:</label>
        <input value={vardas} onChange={e=>setVardas(e.target.value)} required/>
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
      </div>
      <div>
        <label>Message:</label>
        <textarea value={message} onChange={e=>setMessage(e.target.value)}/>
      </div>
      <button type="submit">Update</button>
    </form>
  );
}