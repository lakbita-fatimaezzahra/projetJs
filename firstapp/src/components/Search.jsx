import React, { useState } from 'react';

export default function Search({ onFilter }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');

    // Gérer le changement de recherche par texte
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onFilter(value, category); // Appelle la fonction parent avec texte et catégorie
    };

    // Gérer le changement de catégorie
    const handleCategoryChange = (e) => {
        const value = e.target.value;
        setCategory(value);
        onFilter(searchTerm, value); // Appelle la fonction parent avec texte et catégorie
    };
    return(
        <div>
<div className="search-bar shadow-sm p-3 mb-5 barre rounded">
 
 {/* Sélection de la catégorie */}
 <select
                className=" category-select  mt-1"
                value={category}
                onChange={handleCategoryChange}
                style={{borderColor:'red'}}
            >   <option value="">Toutes les catégories</option>
               <option value="Végétarienne">Végétarienne</option>
                <option value="Fruits_de_mer">Fruits de mer</option>
                <option value="Viande">Viande</option>
                <option value="Spéciale">Spéciale</option>
                <option value="Classique">Classique</option>
                <option value="Exotique">Exotique</option>
                <option value="Saison">Saison</option>
                <option value="Gourmande">Gourmande</option>
                <option value="Bio">Bio</option>
                <option value="Sans_gluten">Sans gluten</option>
                {/* Ajouter d'autres catégories selon vos données */}
            </select>
 
  
  <input type="text" class="search-input mt-1 input" placeholder="Enter name..." value={searchTerm} onChange={handleSearchChange} style={{borderColor:'red'}}/>
  
</div>

        </div>
    )
    
}