import React from 'react'
import { Link } from 'react-router-dom';
export default function navbar() {
    return(
        <div>
<nav class="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded fixed-top">
<Link class="navbar-brand ms-5  text-danger" to="/"><b>Pizza Délice</b></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ms-auto me-5">
      <li class="nav-item active">
      <Link className="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link " to="/About">About</Link>
      </li>  
      <li class="nav-item">
      <Link className="nav-link " to="/Contact">Contact</Link>
      </li>  
      <li class="nav-item">
      <Link className="nav-link " to="/login">Login</Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link " to="/cart">Cart</Link>
      </li>
    </ul>
  </div>
</nav>

        </div>
    )
    
}