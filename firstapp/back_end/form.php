<?php
include('connection.php');

header('Content-Type: application/json');

// Vérifier si les données POST sont présentes
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);

    if (empty($input['address']) || empty($input['phone']) || empty($input['clientId'])) {
        echo json_encode(["success" => false, "message" => "Adresse, téléphone ou ID du client manquant."]);
        exit;
    }

    $address = $input['address'];
    $phone = $input['phone'];
    $clientId = $input['clientId'];

    // Vérifier que le téléphone contient bien 10 chiffres
    if (!preg_match('/^\d{10}$/', $phone)) {
        echo json_encode(["success" => false, "message" => "Le numéro de téléphone doit contenir 10 chiffres."]);
        exit;
    }

    // Récupérer les informations du client (nom et email) depuis la table clients
    $stmtClient = $conn->prepare("SELECT name, email FROM clients WHERE id = ?");
    $stmtClient->bind_param("i", $clientId);
    $stmtClient->execute();
    $resultClient = $stmtClient->get_result();

    if ($resultClient->num_rows > 0) {
        $client = $resultClient->fetch_assoc();
        $clientName = $client['name'];
        $clientEmail = $client['email'];
    } else {
        echo json_encode(["success" => false, "message" => "Client non trouvé."]);
        exit;
    }

    // Préparer la requête pour insérer les données dans la table formulaire
    $stmt = $conn->prepare("INSERT INTO formulaire (address, phone, client_id, client_name, client_email) VALUES (?, ?, ?, ?, ?)");
    if (!$stmt) {
        echo json_encode(["success" => false, "message" => "Erreur préparation de la requête : " . $conn->error]);
        exit;
    }

    $stmt->bind_param("ssiss", $address, $phone, $clientId, $clientName, $clientEmail);

    // Exécuter la requête
    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Données enregistrées avec succès."]);
    } else {
        echo json_encode(["success" => false, "message" => "Erreur lors de l'ajout des données : " . $stmt->error]);
    }

    $stmt->close();
    $stmtClient->close();
} else {
    echo json_encode(["success" => false, "message" => "Méthode non autorisée"]);
}

$conn->close();
?>