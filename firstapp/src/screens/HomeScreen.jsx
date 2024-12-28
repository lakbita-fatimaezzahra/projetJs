import React, { useEffect, useState } from 'react';
import Pizza from '../components/Pizza';
import Search from '../components/Search';
import axios from 'axios';

export default function HomeScreen() {
    const [pizzas, setPizzas] = useState([]); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        // Récupérer les pizzas depuis le backend
        axios.get('http://localhost/emsi/projetJs/firstapp/back_end/get_pizza.php') 
            .then((response) => {
                setPizzas(response.data); 
           
            })
            .catch((err) => {
                setError(err.message); 
               alert(error);
            });
    }, []);
    
 
    return (
        <div style={{ marginTop: "90px", marginBottom: "40px" }}>
            <Search />
            <div className="row">
                {pizzas.map((pizza) => (
                    <div key={pizza.id} className="col-md-4 p-3">
                        <Pizza pizza={pizza} />
                    </div>
                ))}
            </div>
           </div>
       );
    
}