<?php
include('connection.php');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);

    // Récupérer les informations de l'utilisateur
    $username = $input['username'];
    $password = $input['password'];

    // Vérifier si l'utilisateur existe
    $stmt = $conn->prepare("SELECT id, email FROM clients WHERE email = ? AND password = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Connexion réussie, retourner l'id de l'utilisateur
        $user = $result->fetch_assoc();
        echo json_encode(["success" => true, "userId" => $user['id']]);
    } else {
        // Utilisateur ou mot de passe incorrect
        echo json_encode(["success" => false, "message" => "Identifiants incorrects"]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["success" => false, "message" => "Méthode non autorisée"]);
}