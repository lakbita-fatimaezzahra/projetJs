import React, { useState } from "react";
import axios from "axios";
import "./customer.css";

export default function CustomerForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Envoyer les données via Axios
        axios.post('http://localhost/emsi/projetJs/firstapp/back_end/form.php', formData)
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
            <h1>Votre informations:</h1>
            <form onSubmit={handleSubmit} className="customer-form">
                <label>
                    Nom :
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email :
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
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
                    Téléphone :
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit" className="submit-btn">
                    Valider
                </button>
            </form>
        </div>
    );
}
