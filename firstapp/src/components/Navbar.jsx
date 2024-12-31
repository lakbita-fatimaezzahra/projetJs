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
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        try {
            // Send JSON data, not FormData
            const response = await axios.post("http://localhost/emsi/projetJS/firstapp/back_end/login.php", {
                username,
                password
            });
    
            const data = response.data;
    
            if (data.success) {
                localStorage.setItem("userId", data.userId);
                setShowLoginModal(false); // Close the login modal
                navigate("/cart"); // Redirect to the cart page
                return { success: true, message: "Connexion réussie !" };
            } else {
                setErrorMessage(data.message || "Identifiants incorrects");
                return { success: false, message: data.message || "Identifiants incorrects" };
            }
        } catch (error) {
            setErrorMessage("Erreur de connexion au serveur");
            return { success: false, message: "Erreur de connexion au serveur" };
        }
    };
    
    const handleRegister = async (e) => {
        e.preventDefault();
    
        // Préparer les données du formulaire pour l'inscription
        const formData = new FormData();
        formData.append("name", name);
        formData.append("username", username);
        formData.append("password", password);
    
        try {
            // Envoi de la requête d'inscription
            const response = await axios.post("http://localhost/emsi/projetJS/firstapp/back_end/index.php", formData);
            
            if (response.data.success) {  // Vérification si l'inscription a réussi
                setRegisterMessage(response.data.message);
                setShowRegisterModal(false);
                setShowLoginModal(true);  // Ouvrir le modal de connexion après l'inscription
            } else {
                setRegisterMessage(response.data.message || "Erreur lors de l'inscription");  // Affichage du message d'erreur
            }
        } catch (error) {
            console.error("Erreur lors de l'inscription:", error);
            setRegisterMessage("Erreur de connexion au serveur");  // Message en cas d'erreur serveur
        }
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
                                    <button className="btn btn-outline-primary" onClick={() => setShowLoginModal(true)} style={{ border: "none", background: "none" }}>Login</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-outline-success ms-3" onClick={() => setShowRegisterModal(true)} style={{ border: "none", background: "none" }}>Register</button>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <button className="btn btn-outline-danger ms-3" onClick={handleLogout} style={{ border: "none", background: "none" }}>Logout</button>
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
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
            />

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
