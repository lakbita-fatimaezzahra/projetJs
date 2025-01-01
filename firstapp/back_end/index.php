<?php


include('connection.php');

// Vérifier si les données POST sont présentes
if (isset($_POST['name']) && isset($_POST['username']) && isset($_POST['password'])) {
    // Récupérer les valeurs envoyées
    $name = $_POST['name'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Vérifier si le nom d'utilisateur existe déjà
    $query = "SELECT id FROM clients WHERE email = ?";
    $stmt = $conn->prepare($query);
    if (!$stmt) {
        echo json_encode(["success" => false, "message" => "Erreur préparation de la requête : " . $conn->error]);
        exit;
    }

    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo json_encode(["success" => false, "message" => "Nom d'utilisateur déjà pris."]);
    } else {
        // Hacher le mot de passe pour la sécurité
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Préparer la requête d'insertion
        $sql = "INSERT INTO clients (name, email, password) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            echo json_encode(["success" => false, "message" => "Erreur préparation de la requête d'insertion : " . $conn->error]);
            exit;
        }

        // Lier les paramètres
        $stmt->bind_param("sss", $name, $username, $hashedPassword);

        // Exécuter la requête
        if ($stmt->execute()) {
            echo json_encode(["success" => true, "message" => "Inscription réussie !"]);
        } else {
            echo json_encode(["success" => false, "message" => "Erreur lors de l'ajout de l'utilisateur : " . $stmt->error]);
        }
    }

    // Fermer la connexion
    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["success" => false, "message" => "Veuillez remplir tous les champs."]);
}