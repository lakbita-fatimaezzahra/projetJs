<?php
include('connection.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);

    // Récupérer les informations de l'utilisateur
    $username = $input['username'];
    $password = $input['password'];

    // Vérifier si l'utilisateur existe
    $stmt = $conn->prepare("SELECT id, email, password FROM clients WHERE email = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        
        // Vérifier le mot de passe avec password_verify
        if (password_verify($password, $user['password'])) {
            // Connexion réussie, retourner l'id de l'utilisateur
            echo json_encode(["success" => true, "userId" => $user['id']]);
        } else {
            // Mot de passe incorrect
            echo json_encode(["success" => false, "message" => "Mot de passe incorrect"]);
        }
    } else {
        // Utilisateur introuvable
        echo json_encode(["success" => false, "message" => "Identifiants incorrects"]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["success" => false, "message" => "Méthode non autorisée"]);
}
?>
