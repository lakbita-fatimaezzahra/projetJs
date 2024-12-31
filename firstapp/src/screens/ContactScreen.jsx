import React from 'react';
import './styleContact.css';
import { Link } from 'react-router-dom';


export default function ContactScreen() {
   return(
     <div style={{ marginTop: '90px',marginBottom:'40px' }}>

<div class="contact-form">
    <h1>Contactez-nous</h1>

    <div class="form-field">
      <label for="name">Nom :</label>
      <input type="text" id="name" name="name" placeholder="Votre nom" required/>
    </div>

    <div class="form-field">
      <label for="email">Email :</label>
      <input type="email" id="email" name="email" placeholder="Votre email" required/>
    </div>

    <div class="form-field">
      <label for="message">Message :</label>
      <textarea id="message" name="message" rows="5" placeholder="Votre message" required></textarea>
    </div>
    <div class="button-container">
      <button type="submit" class="button">Envoyer</button>
    </div>
  </div>

     </div>
   );
}
