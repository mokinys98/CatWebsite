import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CreateForm from './components/CreateForm';
import ListItems  from './components/ListItems';
import EditForm   from './components/EditForm';

function App() {
  return (
    <div className="container">
      <nav>
        <Link to="/">List</Link> | <Link to="/new">New</Link>
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