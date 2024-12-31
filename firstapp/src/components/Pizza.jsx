import React, { useState, useContext } from 'react'; 
import { Modal } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

export default function Pizza({ pizza, showConfirmation }) {
    const [quantite, setQuantite] = useState(1);
    const [varient, setVarient] = useState("Petite");
    const [show, setShow] = useState(false);

    const { addToCart } = useContext(CartContext);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddToCart = () => {
        addToCart(pizza, varient, quantite);
        showConfirmation(pizza.Nom_Pizza); // Appel de la fonction de confirmation
    };

    return (
        <div style={{ margin: "50px" }} className="shadow-lg p-3 mb-5 bg-white rounded">
            <div onClick={handleShow}>
                <h2>{pizza.Nom_Pizza}</h2>
                <img src={pizza.image} alt={pizza.Nom_Pizza} className="img-fluid" style={{ width: "190px", height: "190px" }} />
            </div>
            <div className="flex-container text-start">
                <div className="w-100 m-1">
                    <p>Taille</p>
                    <select
                        className="form-control"
                        value={varient}
                        onChange={(e) => setVarient(e.target.value)}
                    >
                        {pizza.varients.map((taille, index) => (
                            <option key={index} value={taille}>
                                {taille}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="w-100 m-1">
                    <p>Quantité</p>
                    <select
                        className="form-control"
                        value={quantite}
                        onChange={(e) => setQuantite(Number(e.target.value))}
                    >
                        {[...Array(10).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                                {x + 1}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="flex-container text-start">
                <div className="m-2 w-100">
                    <p>Prix: {pizza.prices[0][varient] * quantite}$</p>
                </div>
                <div className="m-1 w-100">
                    <button
                        className="btn"
                        onClick={handleAddToCart} // Utilisation de la nouvelle fonction
                    >
                        Ajouter au panier
                    </button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2>{pizza.Nom_Pizza}</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={pizza.image} alt={pizza.Nom_Pizza} className="img-fluid" style={{ width: "200px", height: "200px" }} />
                    <p>{pizza.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>
                        Fermer
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
