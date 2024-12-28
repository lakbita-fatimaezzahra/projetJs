import React from 'react'
export default function Search() {
    return(
        <div>
<div className="search-bar shadow-sm p-3 mb-5 bg-white rounded">
  <select class="category-select">
    <option value="all">All Categories</option>
    <option value="Végétarienne">Végétarienne</option>
    <option value="Carnivore">Carnivore</option>
 
  </select>
  <input type="text" class="search-input" placeholder="Enter name..." />
  <button className="search-button">Search</button>
</div>

        </div>
    )
    
}