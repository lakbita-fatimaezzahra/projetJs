import React, { useEffect, useState } from 'react'; 
import Pizza from '../components/Pizza';
import Search from '../components/Search';
import Image from './images/shutterstock_594962792.jpg'
import axios from 'axios';

export default function HomeScreen() {
    const [pizzas, setPizzas] = useState([]); // Toutes les pizzas
    const [filteredPizzas, setFilteredPizzas] = useState([]); // Pizzas filtrées
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // Page actuelle
    const [confirmationMessage, setConfirmationMessage] = useState(''); // État pour le message de confirmation
    const pizzasPerPage = 2; // Nombre de pizzas par page

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
        setCurrentPage(1); // Réinitialiser la page à 1 quand un filtre est appliqué
    };

    // Fonction pour afficher le message de confirmation
    const showConfirmation = (pizzaName) => {
        setConfirmationMessage(`La pizza ${pizzaName} a été ajoutée au panier !`);

        // Supprimer le message après 3 secondes
        setTimeout(() => {
            setConfirmationMessage('');
        }, 3000);
    };

    // Calculer les pizzas à afficher en fonction de la page actuelle
    const indexOfLastPizza = currentPage * pizzasPerPage;
    const indexOfFirstPizza = indexOfLastPizza - pizzasPerPage;
    const currentPizzas = filteredPizzas.slice(indexOfFirstPizza, indexOfLastPizza);

    // Changer de page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculer le nombre total de pages
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredPizzas.length / pizzasPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
<<<<<<< HEAD
        <div style={{  marginBottom: "40px" }}>
            {/* Image Section */}
            <div className="" >
                <img 
                    src={Image}
                    alt="Delicious Pizza" 
                      />
               
            </div>
=======
        <div style={{ marginTop: "90px", marginBottom: "40px" }}>
            {/* Affichage du message de confirmation en haut */}
            {confirmationMessage && (
                <div style={{ textAlign: "center", color: 'green', fontWeight: 'bold', marginBottom: '20px' }}>
                    {confirmationMessage}
                </div>
            )}
>>>>>>> refs/remotes/origin/main

            {/* Barre de recherche et sélection de catégorie */}
            <Search onFilter={handleFilter} />

            {/* Affichage des pizzas */}
            <div className="row">
                {currentPizzas.map((pizza) => (
                    <div key={pizza.id} className="col-md-4 p-3">
                        <Pizza pizza={pizza} showConfirmation={showConfirmation} />
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="pagination" style={styles.paginationContainer}>
                <ul className="pagination" style={styles.paginationList}>
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <button 
                                onClick={() => paginate(number)} 
                                className="page-link" 
                                style={styles.pageButton}
                            >
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

// Styles pour la pagination
const styles = {
    paginationContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
    },
    paginationList: {
        listStyleType: 'none',
        padding: 0,
        display: 'flex',
    },
    pageButton: {
        backgroundColor: 'red',
        color: 'white',
        border: '1px solid red',
        margin: '0 5px',
        padding: '8px 16px',
        borderRadius: '5px',
        cursor: 'pointer',
    }
};
