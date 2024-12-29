<?php
include('connection.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);

    // Vérifier si les données sont bien reçues
    if (!isset($input['userId']) || !isset($input['items'])) {
        echo json_encode(["success" => false, "message" => "Données manquantes."]);
        exit();
    }

    // Récupérer les informations de la commande
    $userId = $input['userId'];
    $items = $input['items'];

    // Créer la commande
    $stmt = $conn->prepare("INSERT INTO commande (Date_Commande, Id_Client, etat) VALUES (?, ?, ?)");
    $date = date('Y-m-d H:i:s'); // Format de date
    $etat = 'valider'; // Etat de la commande

    $stmt->bind_param("sis", $date, $userId, $etat);

    if ($stmt->execute()) {
        $commandeId = $stmt->insert_id;

        // Ajouter les pizzas dans la commande_pizza
        $stmtLigne = $conn->prepare("INSERT INTO commande_pizza (Id_Commande, Id_Pizza, Quantite) VALUES (?, ?, ?)");
        
        foreach ($items as $item) {
            // S'assurer que chaque item a une pizzaId et une quantité
            if (isset($item['pizzaId'], $item['quantity'])) {
                $stmtLigne->bind_param("iii", $commandeId, $item['pizzaId'], $item['quantity']);
                $stmtLigne->execute();
            }
        }

        echo json_encode(["success" => true, "message" => "Commande validée avec succès !"]);
    } else {
        echo json_encode(["success" => false, "message" => "Erreur lors de la création de la commande."]);
    }

    $stmt->close();
    $stmtLigne->close();
    $conn->close();
} 