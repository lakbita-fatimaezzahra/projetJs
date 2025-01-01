import React, { useState, useEffect } from "react";
import axios from "axios";
import "./customer.css";

export default function CustomerForm() {
    const [formData, setFormData] = useState({
        address: "",
        phone: ""
    });
    const [clientId, setClientId] = useState(null); // ID du client connecté

    // Récupérer l'ID du client stocké dans le localStorage
    useEffect(() => {
        const userId = localStorage.getItem("userId");
        if (userId) {
            setClientId(userId);
        } else {
            alert("Veuillez vous connecter avant de soumettre le formulaire.");
        }
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!clientId) {
            alert("Utilisateur non connecté.");
            return;
        }

        // Vérifier que le téléphone contient bien 10 chiffres
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(formData.phone)) {
            alert("Le numéro de téléphone doit contenir exactement 10 chiffres.");
            return;
        }

        // Ajouter l'ID du client et les informations supplémentaires
        const dataToSend = {
            address: formData.address,
            phone: formData.phone,
            clientId: clientId
        };

        // Envoyer les données au backend via Axios
        axios.post('http://localhost/emsi/projetJs/firstapp/back_end/form.php', dataToSend)
            .then(response => {
                if (response.data.success) {
                    alert("Commande validée avec succès !");
                    window.location.href = '/'; // Rediriger après la soumission réussie
                } else {
                    alert("Erreur: " + response.data.message);
                }
            })
            .catch(error => {
                console.error("Erreur lors de l'envoi des données:", error);
                alert("Une erreur est survenue.");
            });
    };

    return (
        <div style={{ marginTop: "90px", marginBottom: "40px" }}>
            <h1>Informations pour livraison:</h1>
            <form onSubmit={handleSubmit} className="customer-form">
                <label>
                    Adresse :
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Téléphone (10 chiffres) :
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        pattern="\d{10}" // Permet de valider que le téléphone contient bien 10 chiffres
                        title="Le numéro de téléphone doit contenir 10 chiffres"
                    />
                </label>
                <button type="submit" className="submit-btn">
                    Valider
                </button>
            </form>
        </div>
    );
}
