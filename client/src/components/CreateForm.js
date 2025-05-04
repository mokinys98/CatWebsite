import React, { useState } from 'react';
import { useNavigate }      from 'react-router-dom';
import axios                from 'axios';

export default function CreateForm() {
  const [vardas, setVardas]   = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/form', { vardas, email, message });
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Error creating record');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Entry</h2>
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
      <button type="submit">Create</button>
    </form>
  );
}