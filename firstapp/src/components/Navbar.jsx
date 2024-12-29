import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() { // Renommé avec une majuscule
    const location = useLocation(); // Obtenir le chemin actuel

    // Fonction pour vérifier si un lien est actif
    const isActive = (path) => location.pathname === path ? "nav-link active text-danger" : "nav-link";

    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded fixed-top">
                <Link className="navbar-brand ms-5 text-danger" to="/">
                    <b>Pizza Délice</b>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto me-5">
                        <li className="nav-item">
                            <Link className={isActive("/")} to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive("/About")} to="/About">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive("/Contact")} to="/Contact">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive("/login")} to="/login">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive("/cart")} to="/cart">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
