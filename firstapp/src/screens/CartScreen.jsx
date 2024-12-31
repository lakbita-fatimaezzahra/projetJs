import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';
import axios from "axios";
import "./style.css";

export default function CartScreen() {
    const { cartItems, updateQuantity, removeItem } = useContext(CartContext);
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");

    // Vérification si l'utilisateur est connecté
    useEffect(() => {
        if (!userId) {
            navigate("/login?redirect=cart"); // Redirige vers la page de connexion avec redirection au panier
        }
    }, [navigate, userId]);

    const total = cartItems.reduce(
        (sum, item) => sum + item.prices[0][item.varient] * item.quantite,
        0
    );

<<<<<<< HEAD
    const submitOrder = async () => {
        const order = {
            userId,
            total,
            items: cartItems.map((item) => ({
                pizzaId: item.id,
                variant: item.varient,
                quantity: item.quantite,
                price: item.prices[0][item.varient],
            })),
        };

        try {
            const response = await axios.post("http://localhost/emsi/projetJs/firstapp/back_end/add_to_cart.php", order);

            if (response.data.success) {
                alert("Commande validée avec succès !");
                navigate("/"); // Redirige vers la page d'accueil après la commande réussie
            } else {
                alert("Erreur lors de la validation de la commande.");
=======
    const handleValidation = () => {
        if (isUserLoggedIn) {
            submitOrder();
        } else {
            setShowLogin(true);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value; // Remplacez 'username' par 'email'
        const password = e.target.password.value;
    
        try {
            const response = await axios.post("http://localhost/emsi/projetJs/firstapp/back_end/login.php", {
                email, // Utilisez 'email' ici
                password,
            });
            
            if (response.data.success) {
                setIsUserLoggedIn(true);
                setUserId(response.data.userId);
                setShowLogin(false);
                alert("Connexion réussie ! Vous pouvez valider votre commande.");
            } else {
                alert("Échec de la connexion. Veuillez vérifier vos identifiants.");
               
>>>>>>> refs/remotes/origin/main
            }
        } catch (error) {
            console.error("Erreur:", error);
            alert("Une erreur s'est produite, veuillez réessayer.");
        }
    };
    

    return (
        <div style={{ marginTop: "90px", marginBottom: "40px" }}>
            <div className="cart-container">
                <div className="cart-header">
                    <h1>Votre Panier</h1>
                    <p>{cartItems.length} articles</p>
                </div>

                {cartItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="cart-item">
                            <div className="item-details">
                                <img src={item.image} alt={item.Nom_Pizza} />
                                <div>
                                    <p className="name">{item.Nom_Pizza}</p>
                                </div>
                            </div>
                            <div className="col">
                                <p className="description">{item.description || "Description non disponible"}</p>
                            </div>
                            <div className="col">
                                <p className="size">{item.varient}</p>
                            </div>
                            <div className="col">
                                <button
                                    onClick={() => updateQuantity(item, item.quantite - 1)}
                                    className="quantity-btn"
                                    disabled={item.quantite <= 1}
                                >
                                    -
                                </button>
                                <span className="quantity">{item.quantite}</span>
                                <button
                                    onClick={() => updateQuantity(item, item.quantite + 1)}
                                    className="quantity-btn"
                                >
                                    +
                                </button>
                            </div>
                            <div className="col">
                                &euro; {item.prices[0][item.varient] * item.quantite}
                                <span
                                    className="close"
                                    onClick={() => removeItem(item)}
                                    style={{ marginLeft: "10px", cursor: "pointer" }}
                                >
                                    &#10005;
                                </span>
                            </div>
                        </div>
                        {index < cartItems.length - 1 && <hr className="separator" />}
                    </React.Fragment>
                ))}

                <div className="cart-total">Total : &euro; {total.toFixed(2)}</div>
                <button className="checkout-btn" onClick={submitOrder}>
                    Validation
                </button>
<<<<<<< HEAD
=======

                {showLogin && (
                    <div className="login-modal">
                        <h2>Connexion requise</h2>
                        <form onSubmit={handleLogin}>
                            <input
                                type="text"
                                placeholder="Email"
                                required
                                className="login-input"
                                name='email'
                            />
                            <input
                                type="password"
                                placeholder="Mot de passe"
                                required
                                className="login-input"
                                name='password'
                            />
                            <button type="submit" className="login-btn">
                                Se connecter
                            </button>
                            
                        </form>
                    </div>
                )}
>>>>>>> refs/remotes/origin/main
            </div>
        </div>
    );
}
