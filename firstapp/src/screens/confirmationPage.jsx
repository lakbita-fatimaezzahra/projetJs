// ConfirmationPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ConfirmationPage() {
  const location = useLocation();
  const { successMessage } = location.state || {}; // Récupérer le message de succès passé via 'state'

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{successMessage || "Merci de nous avoir contacté!"}</h1>
    </div>
  );
}
