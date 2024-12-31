<?php
include('connection.php');

// Vérification que la requête est en POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupération des données envoyées par la requête
    $data = json_decode(file_get_contents('php://input'), true);

    // Validation des données
    $name = isset($data['name']) ? trim($data['name']) : '';
    $email = isset($data['email']) ? trim($data['email']) : '';
    $message = isset($data['message']) ? trim($data['message']) : '';

    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(['success' => false, 'message' => 'Tous les champs sont requis.']);
        exit;
    }

    // Configuration de l'email
    $to = 'kenzaboussoufi02
    @gmail.com';  // L'email où vous souhaitez recevoir les messages
    $subject = 'Message de ' . $name;
    $body = "Nom: $name\nEmail: $email\n\nMessage: $message";
    $headers = "From: $email";

    // Envoi de l'email
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Message envoyé avec succès !']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'envoi du message.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Méthode HTTP non autorisée.']);
}
?>
