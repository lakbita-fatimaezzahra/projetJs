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
<<<<<<< HEAD
=======
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import ConfirmationPage from './screens/confirmationPage';

>>>>>>> refs/remotes/origin/main

import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Navbar />
<<<<<<< HEAD
          <main>  {/* Wrap the content inside the main tag */}
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/About" element={<AboutScreen />} />
              <Route path="/Contact" element={<ContactScreen />} />
            </Routes>
          </main>
=======
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/About" element={<AboutScreen />} />
            <Route path="/Contact" element={<ContactScreen />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />

            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
>>>>>>> refs/remotes/origin/main
          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
