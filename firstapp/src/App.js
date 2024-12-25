import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> {/* Navigation bar will always be displayed */}
        <Routes>
          {/* Define routes for HomeScreen and CartScreen */}
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/About" element={<AboutScreen />} />
          <Route path="/Contact" element={<ContactScreen />} />
          <Route path="/register" element={<RegisterScreen/>}/>
          <Route path="/login" element={<LoginScreen/>}/>

        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
