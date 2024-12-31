import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
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
                <button className="checkout-btn" >
                    Validation
                </button>

              
            </div>
        </div>
    );
}
