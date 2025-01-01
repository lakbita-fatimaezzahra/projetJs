import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import CustomerForm from "./screens/CustomerForm";

import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import LoginScreen from './screens/LoginScreen';
import ConfirmationPage from './screens/confirmationPage';


import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/About" element={<AboutScreen />} />
            <Route path="/Contact" element={<ContactScreen />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/customer-info" element={<CustomerForm />} />


          </Routes>

          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
