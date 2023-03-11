import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Items from './components/Items';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemDetails from './components/ItemDetails';

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Routes>
          <Route path='/' element={<Items />} />
          <Route path='/:id' element={<ItemDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
