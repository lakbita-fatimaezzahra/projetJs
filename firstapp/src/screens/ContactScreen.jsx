import React, { useState } from 'react';
import './styleContact.css';
import { useNavigate } from 'react-router-dom'; // Importez le hook 'useNavigate'

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Utilisez 'useNavigate' pour la redirection

<<<<<<< HEAD
export default function ContactScreen() {
   return(
     <div style={{ marginTop: '90px',marginBottom:'40px' }}>
=======
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche la soumission par défaut
>>>>>>> refs/remotes/origin/main

    // Validation des champs
    const newErrors = {};
    if (!name) newErrors.name = "Le nom est requis.";
    if (!email) {
      newErrors.email = "L'email est requis.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "L'email n'est pas valide.";
    }
    if (!message) newErrors.message = "Le message est requis.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Simuler l'envoi de données (remplacez ceci par un appel API réel si nécessaire)
    setTimeout(() => {
      // Rediriger vers la page de confirmation et passer le message de succès
      navigate('/confirmation', { state: { successMessage: 'Votre message a été envoyé avec succès!' } });

      // Réinitialiser les champs du formulaire après envoi
      setName('');
      setEmail('');
      setMessage('');
    }, 1000);
  };

  return (
    <div style={{ marginTop: '90px', marginBottom: '40px' }}>
      <div className="contact-form">
        <h1>Contactez-nous</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Votre message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
          </div>

          <div className="button-container">
            <button type="submit" className="button">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  );
}
