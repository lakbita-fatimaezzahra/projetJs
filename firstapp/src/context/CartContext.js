import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add item to cart
    const addToCart = (pizza, varient, quantite) => {
        const itemExists = cartItems.find(
            (item) => item.Nom_Pizza === pizza.Nom_Pizza && item.varient === varient
        );

        if (itemExists) {
            // Update the quantity of the existing item
            setCartItems(
                cartItems.map((item) =>
                    item.Nom_Pizza === pizza.Nom_Pizza && item.varient === varient
                        ? { ...item, quantite: item.quantite + quantite }
                        : item
                )
            );
        } else {
            // Add new item to cart
            setCartItems([...cartItems, { ...pizza, varient, quantite }]);
        }
    };

    // Function to update the quantity of an item in the cart
    const updateQuantity = (item, newQuantity) => {
        if (newQuantity === 0) {
            // If quantity is 0, remove the item from the cart
            removeItem(item);
        } else {
            setCartItems((prevItems) =>
                prevItems.map((cartItem) =>
                    cartItem.id === item.id && cartItem.varient === item.varient
                        ? { ...cartItem, quantite: newQuantity }
                        : cartItem
                )
            );
        }
    };

    // Function to remove an item from the cart
    const removeItem = (item) => {
        setCartItems((prevItems) =>
            prevItems.filter(
                (cartItem) => !(cartItem.id === item.id && cartItem.varient === item.varient)
            )
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};
