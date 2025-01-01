import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { isUserLoggedIn, logoutUser, LoginModal, RegisterModal } from '../screens/LoginScreen';
import axios from 'axios';
export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [registerMessage, setRegisterMessage] = useState("");

    const isActive = (path) => location.pathname === path ? "nav-link active text-danger" : "nav-link";

    const handleCartClick = () => {
        if (isUserLoggedIn()) {
            navigate("/cart");
        } else {
            setShowLoginModal(true);
        }
    };
    const handleLogin = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const userData={
            username:username,
            password:password
        }
        // Envoi de la requête d'authentification
        axios.post("http://localhost/emsi/projetJS/firstapp/back_end/login.php", userData)
        .then((response) => {
            const data = response.data;
            
            // Vérification si la connexion est réussie
            if (data.success) {
                localStorage.setItem("userId", data.userId);
                setShowLoginModal(false); // Fermer le modal de connexion
                navigate("/cart"); // Rediriger vers la page du panier
                return { success: true, message: "Connexion réussie !" };
            } else {
                setErrorMessage(data.message || "Identifiants incorrects");
            
            }
        })
        .catch((error) => {
            setErrorMessage("Erreur de connexion au serveur");
           
        });
    };
    
    const handleRegister = (e) => {
        e.preventDefault();
    
        // Préparer les données du formulaire pour l'inscription
        const formData = new FormData();
        formData.append("name", name);
        formData.append("username", username);
        formData.append("password", password);
        // Envoi de la requête d'inscription
        axios.post("http://localhost/emsi/projetJS/firstapp/back_end/index.php", formData)
            .then((response) => {
              
                if (response.data.success) {  
                    setRegisterMessage(response.data.message);
                    setShowRegisterModal(false);
                    setShowLoginModal(true);  // Ouvrir le modal de connexion après l'inscription
                } else {
                    setRegisterMessage(response.data.message );  // Affichage du message d'erreur
                }
            })
            .catch((error) => {
                setRegisterMessage("Erreur de connexion au serveur");  // Message en cas d'erreur serveur
            });
    };
    
    const handleLogout = () => {
        logoutUser();
        alert("Vous avez été déconnecté avec succès.");
        navigate("/");
    };

    const handleSwitchToRegister = () => {
        setShowLoginModal(false);
        setShowRegisterModal(true);
    };

    const handleSwitchToLogin = () => {
        setShowRegisterModal(false);
        setShowLoginModal(true);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded fixed-top">
                <Link className="navbar-brand ms-5 text-danger" to="/">
                    <b>Pizza Délice</b>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto me-5">
                        <li className="nav-item"><Link className={isActive("/")} to="/">Home</Link></li>
                        <li className="nav-item"><Link className={isActive("/About")} to="/About">About</Link></li>
                        <li className="nav-item"><Link className={isActive("/Contact")} to="/Contact">Contact</Link></li>
                        <li className="nav-item">
                            <button className={isActive("/cart")} onClick={handleCartClick} style={{ border: "none", background: "none" }}>
                                Cart
                            </button>
                        </li>
                        {!isUserLoggedIn() ? (
                            <>
                                <li className="nav-item">
                                    <button className="btn btn-outline-primary custom-btn ms-3" onClick={() => setShowLoginModal(true)} style={{ border: "none", background: "none" }}>Login</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-outline-success custom-btn ms-3" onClick={() => setShowRegisterModal(true)} style={{ border: "none", background: "none" }}>Register</button>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <button className="btn btn-outline-danger custom-btn ms-3" onClick={handleLogout} style={{ border: "none", background: "none" }}>Logout</button>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>

     

<LoginModal
    show={showLoginModal}
    handleClose={() => setShowLoginModal(false)}
    handleLogin={handleLogin}
    errorMessage={errorMessage}
    handleSwitchToRegister={handleSwitchToRegister}
    username={username}
    setUsername={setUsername}  // Passer setUsername pour mettre à jour l'état
    password={password}
    setPassword={setPassword}  // Passer setPassword pour mettre à jour l'état
/>

<RegisterModal
    show={showRegisterModal}
    handleClose={() => setShowRegisterModal(false)}
    handleRegister={handleRegister}  // This should point to handleRegister, not registerUser
    registerMessage={registerMessage}
    handleSwitchToLogin={handleSwitchToLogin}
    name={name}
    setName={setName}  // Passer setName pour mettre à jour l'état
    username={username}
    setUsername={setUsername}  // Passer setUsername pour mettre à jour l'état
    password={password}
    setPassword={setPassword}  // Passer setPassword pour mettre à jour l'état
/>

        </div>
    );
}
