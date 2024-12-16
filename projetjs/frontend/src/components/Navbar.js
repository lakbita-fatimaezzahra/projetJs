import React from 'react'
export default function navbar() {
    return(
        <div>
<nav class="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded fixed">
  <a class="navbar-brand ms-5" href="#"><b>MyPIZZA</b></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ms-auto me-5">
      <li class="nav-item active">
        <a class="nav-link" href="#">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Cart</a>
      </li>
    </ul>
  </div>
</nav>

        </div>
    )
    
}