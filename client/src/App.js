import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CreateForm from './components/CreateForm';
import ListItems  from './components/ListItems';
import EditForm   from './components/EditForm';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand font-monospace">AdminCenter</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/new">New</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <hr/>
      <Routes>
        <Route path="/" element={<ListItems/>}/>
        <Route path="/new" element={<CreateForm/>}/>
        <Route path="/edit/:id" element={<EditForm/>}/>
      </Routes>
    </div>
  );
}

export default App;