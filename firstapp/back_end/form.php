<?php
include('connection.php'); // Assurez-vous que la connexion à la base de données est correctement configurée
session_start();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);

    // Vérifier si les données sont bien reçues
    if (!isset($input['name']) || !isset($input['email']) || !isset($input['address']) || !isset($input['phone'])) {
        echo json_encode(["success" => false, "message" => "Données manquantes."]);
        exit();
    }

    // Récupérer les informations du formulaire
    $name = $input['name'];
    $email = $input['email'];
    $address = $input['address'];
    $phone = $input['phone'];

    // Insérer dans la base de données
    $stmt = $conn->prepare("INSERT INTO formulaire (name, email, address, phone,client_id) VALUES (?, ?, ?, ?,?)");
    $stmt->bind_param("ssssi", $name, $email, $address, $phone,$_SESSION['id']);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Données enregistrées avec succès."]);
    } else {
        echo json_encode(["success" => false, "message" => "Erreur lors de l'enregistrement des données."]);
    }

    $stmt->close();
    $conn->close();
}
?>
