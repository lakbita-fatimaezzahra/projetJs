import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (pizza, varient, quantite) => {
        const itemExists = cartItems.find(
            (item) => item.Nom_Pizza === pizza.Nom_Pizza && item.varient === varient
        );

        if (itemExists) {
            setCartItems(
                cartItems.map((item) =>
                    item.Nom_Pizza === pizza.Nom_Pizza && item.varient === varient
                        ? { ...item, quantite: item.quantite + quantite }
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...pizza, varient, quantite }]);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
