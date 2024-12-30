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
                </div>
            </div>
        </div>
    );
}
