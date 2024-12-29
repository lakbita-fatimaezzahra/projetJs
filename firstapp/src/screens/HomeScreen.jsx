import React, { useEffect, useState } from 'react';
import Pizza from '../components/Pizza';
import Search from '../components/Search';
import axios from 'axios';

export default function HomeScreen() {
    const [pizzas, setPizzas] = useState([]); // Toutes les pizzas
    const [filteredPizzas, setFilteredPizzas] = useState([]); // Pizzas filtrées
    const [error, setError] = useState(null); 

    useEffect(() => {
        // Récupérer les pizzas depuis le backend
        axios.get('http://localhost/emsi/projetJs/firstapp/back_end/get_pizza.php')
            .then((response) => {
                setPizzas(response.data); 
                setFilteredPizzas(response.data); // Initialiser le filtre avec toutes les pizzas
            })
            .catch((err) => {
                setError(err.message); 
                alert(err.message);
            });
    }, []);

    // Fonction de filtrage combiné pour Search
    const handleFilter = (searchTerm, category) => {
        let filtered = pizzas;

        // Filtrer par catégorie si une catégorie est sélectionnée
        if (category) {
            filtered = filtered.filter((pizza) =>
                pizza.category === category
            );
        }

        // Filtrer par texte
        if (searchTerm) {
            filtered = filtered.filter((pizza) =>
                pizza.Nom_Pizza && pizza.Nom_Pizza.toLowerCase().includes(searchTerm.toLowerCase())
     
            );
        }

        setFilteredPizzas(filtered);
    };

    return (
        <div style={{ marginTop: "90px", marginBottom: "40px" }}>
            {/* Barre de recherche et sélection de catégorie */}
            <Search onFilter={handleFilter} />

            {/* Affichage des pizzas */}
            <div className="row">
                {filteredPizzas.map((pizza) => (
                    <div key={pizza.id} className="col-md-4 p-3">
                        <Pizza pizza={pizza} />
                    </div>
                ))}
            </div>
        </div>
    );
}
