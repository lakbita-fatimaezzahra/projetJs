
import { Modal, Button } from 'react-bootstrap'; 


// Fonction pour vérifier si l'utilisateur est connecté
export const isUserLoggedIn = () => !!localStorage.getItem("userId");


// Fonction de déconnexion
export const logoutUser = () => {
    localStorage.removeItem("userId");
};

// Modal Login
export function LoginModal({ show, handleClose, handleLogin, errorMessage, handleSwitchToRegister, username, setUsername, password, setPassword }) {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Connexion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit={handleLogin}>
  <div className="form-group">
    <label>Nom d'utilisateur</label>
    <input
      type="text"
      className="form-control"
      placeholder="Entrez votre nom d'utilisateur"
      value={username}
      onChange={(e) => setUsername(e.target.value)} 
      required
      name="username"
    />
  </div>
  <div className="form-group">
    <label>Mot de passe</label>
    <input
      type="password"
      className="form-control"
      placeholder="Entrez votre mot de passe"
      value={password}
      onChange={(e) => setPassword(e.target.value)} 
      required
      name="password"
    />
  </div>
  <button type="submit" className="btn btn-primary mt-3 w-100">
    Se connecter
  </button>
  {errorMessage && <div className="text-danger mt-3">{errorMessage}</div>}
</form>

                <div className="mt-3 text-center">
                    <span>Pas encore de compte ?</span>
                    <a className="btn-link" onClick={handleSwitchToRegister}>
                        Inscrivez-vous ici
                    </a>
=======
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        // Validation de base
        if (!email || !password) {
            setError("All fields are required.");
            return;
        }

        // Suppression des anciens messages d'erreur
        setError(null);

        // Envoyer les données au backend
        axios
            .post('http://localhost/emsi/projetJs/firstapp/back_end/login.php', { email, password })
            .then((response) => {
                if (response.data.success) {
                    // Stocker le token ou rediriger l'utilisateur après connexion réussie
                    alert("Login successful!");
                    navigate('/dashboard'); // Changez '/dashboard' avec la route de la page principale après connexion
                } else {
                    setError(response.data.message || "Invalid email or password.");
                }
            })
            .catch((err) => {
                console.error("Error during login:", err);
                setError("An error occurred while trying to log in. Please try again later.");
            });
    };

    return (
        <div style={{ marginTop: '90px', marginBottom: '40px' }}>
            <div className="row justify-content-center">
                <div className="col-md-5 mt-5 text-left">
                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Login</h2>
                    {error && <div className="alert alert-danger">{error}</div>} {/* Afficher les erreurs */}
                    <form onSubmit={handleLogin}>
                        <div>
                            <input
                                required
                                type="text"
                                placeholder="Email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Mise à jour de l'état
                            />
                            <input
                                required
                                type="password"
                                placeholder="Password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Mise à jour de l'état
                            />
                            <button type="submit" className="btn btn-primary mt-3">LOGIN</button>
                            <div className="mt-3 text-center">
                                <p>
                                    Don't have an account?{' '}
                                    <Link to="/register" style={{ textDecoration: 'none', color: 'blue' }}>
                                        Register here
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
>>>>>>> refs/remotes/origin/main
                </div>
            </Modal.Body>
        </Modal>
    );
}

// Modal Register
export function RegisterModal({ show, handleClose, handleRegister, registerMessage, handleSwitchToLogin, name, setName, username, setUsername, password, setPassword }) {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Inscription</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <label>Nom</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Entrez votre nom"
                            value={name}
                            onChange={(e) => setName(e.target.value)}  // Mise à jour de l'état
                            required
                            name="name"
                        />
                    </div>
                    <div className="form-group">
                        <label>Nom d'utilisateur</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Entrez votre nom d'utilisateur"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}  // Mise à jour de l'état
                            required
                            name="username"
                        />
                    </div>
                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Entrez votre mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}  // Mise à jour de l'état
                            required
                            name="password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 w-100">
                        S'inscrire
                    </button>
                    {registerMessage && <div className="text-success mt-3">{registerMessage}</div>}
                </form>
                <div className="mt-3 text-center">
                    <span>Vous avez déjà un compte ?</span>
                    <a className="btn-link" onClick={handleSwitchToLogin}>
                        Connectez-vous ici
                    </a>
                </div>
            </Modal.Body>
        </Modal>
    );
}
