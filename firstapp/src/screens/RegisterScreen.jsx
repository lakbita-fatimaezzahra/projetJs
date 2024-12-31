import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RegisterScreen() {
    const [errors, setErrors] = useState({}); // Pour stocker les erreurs
    const navigate = useNavigate(); // Pour la redirection

    const register = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm_password');

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const newErrors = {};

        // Validation du format de l'email
        if (!emailRegex.test(email)) {
            newErrors.email = "L'adresse email n'est pas valide.";
        }

        // Vérification de la longueur du mot de passe
        if (password.length < 8) {
            newErrors.password = "Le mot de passe doit contenir au moins 8 caractères.";
        }

        // Vérification de la correspondance des mots de passe
        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Les mots de passe ne correspondent pas.";
        }

        // Si des erreurs existent, les afficher et ne pas soumettre le formulaire
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Réinitialiser les erreurs
        setErrors({});

        // Envoyer les données au backend
        axios
            .post('http://localhost/emsi/projetJs/firstapp/back_end/register.php', formData)
            .then((response) => {
                const { data } = response;
                if (data.success) {
                    alert(data.message); // Message de confirmation
                    navigate('/login'); // Rediriger vers la page de connexion
                } else {
                    alert(data.message); // Afficher l'erreur du backend
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("Une erreur s'est produite. Veuillez vérifier la console pour plus de détails.");
            });
    };

    return (
        <div>
            <form onSubmit={register}>
                <div className="row justify-content-center">
                    <div className="col-md-5 mt-5 text-left">
                        <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Register</h2>
                        <div>
                            <input required name="name" placeholder="Name" className="form-control" />
                            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

                            <input required type="email" name="email" placeholder="Email" className="form-control" />
                            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

                            <input required type="password" name="password" placeholder="Password" className="form-control" />
                            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

                            <input required type="password" name="confirm_password" placeholder="Confirm Password" className="form-control" />
                            {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}

                            <button type="submit" className="btn mt-3">REGISTER</button>
                            <div className="mt-3 text-center">
                                <p>
                                    Already have an account?{' '}
                                    <Link to="/login" style={{ textDecoration: 'none', color: 'blue' }}>
                                        Login here
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
