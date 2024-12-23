import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> {/* Navigation bar will always be displayed */}
        <Routes>
          {/* Define routes for HomeScreen and CartScreen */}
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
