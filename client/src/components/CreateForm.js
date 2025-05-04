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
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-4">New Entry</h2>

            <div className="mb-3">
              <label htmlFor="vardas" className="form-label">Vardas</label>
              <input
                type="text"
                id="vardas"
                className="form-control"
                value={vardas}
                onChange={e => setVardas(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                className="form-control"
                rows="4"
                value={message}
                onChange={e => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}