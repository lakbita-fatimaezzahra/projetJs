import React from 'react';
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer-sticky bg-dark text-center text-white" style={{marginBottom:"0px"}}>
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2025 Copyright: 
        <Link className="navbar-brand ms-5 text-danger" to="/">
           <b>Pizza Délice</b>
         
        </Link>
      </div>
    </footer>
  );
}
