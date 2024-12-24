import React from 'react';
import './style.css';
import pizzaBackground from "./images/pizza.webp";
export default function CartScreen() {
  return (
    <div style={{ marginTop: '90px',marginBottom:'40px' }}>
      <div className="cart-container">
        {/* Header */}
        <div className="cart-header">
          <h1>Votre Panier</h1>
          <p>3 articles</p>
        </div>

        {/* Produits */}
        <div className="cart-item">
          <div className="item-details">
            <img src={pizzaBackground} alt="Produit" />
            <div>
              <p className="name">Produit A</p>
            </div>
          </div>
          <div className="col">
            <p className="description">Description</p>
          </div>
          <div className="col">
            <p className="size">Taille</p>
          </div>
          <div className="col">
            <a href="#">-</a>
            <a href="#" className="border">1</a>
            <a href="#">+</a>
          </div>
          <div className="col">
            &euro; 44,00 <span className="close">&#10005;</span>
          </div>
        </div>

        {/* Séparateur */}
        <hr className="separator" />

        <div className="cart-item">
          <div className="item-details">
            <img src={pizzaBackground} alt="Produit" />
            <div>
              <p className="name">Produit B</p>
            </div>
          </div>
          <div className="col">
            <p className="description">Description</p>
          </div>
          <div className="col">
            <p className="size">Taille</p>
          </div>
          <div className="col">
            <a href="#">-</a>
            <a href="#" className="border">1</a>
            <a href="#">+</a>
          </div>
          <div className="col">
            &euro; 44,00 <span className="close">&#10005;</span>
          </div>
        </div>

        {/* Séparateur */}
        <hr className="separator" />

        <div className="cart-item">
          <div className="item-details">
            <img src={pizzaBackground} alt="Produit" />
            <div>
              <p className="name">Produit C</p>
            </div>
          </div>
          <div className="col">
            <p className="description">Description</p>
          </div>
          <div className="col">
            <p className="size">Taille</p>
          </div>
          <div className="col">
            <a href="#">-</a>
            <a href="#" className="border">1</a>
            <a href="#">+</a>
          </div>
          <div className="col">
            &euro; 10,00 <span className="close">&#10005;</span>
          </div>
        </div>

        {/* Total */}
        <div className="cart-total">
          Total : &euro; 98,00
        </div>

        {/* Bouton de validation */}
        <button className="checkout-btn">Validation</button>
      </div>
    </div>
  );
}
