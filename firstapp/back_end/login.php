<?php 
include('connection.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);

    // Récupérer les informations de l'utilisateur
    $email = $input['email']; // Correction : Utiliser "email"
    $password = $input['password'];

    // Vérifier si l'utilisateur existe
<<<<<<< HEAD
    $stmt = $conn->prepare("SELECT id, email, password FROM clients WHERE email = ?");
    $stmt->bind_param("s", $username);
=======
    $stmt = $conn->prepare("SELECT id, email FROM clients WHERE email = ? AND password = ?");
    $stmt->bind_param("ss", $email, $password); // Vérifiez les colonnes email et password
>>>>>>> refs/remotes/origin/main
    $stmt->execute();
    $result = $stmt->get_result();

    if (!isset($input['email']) || !isset($input['password'])) {
        echo json_encode(["success" => false, "message" => "Données manquantes"]);
        exit;
    }
    
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
<<<<<<< HEAD
?>
=======
>>>>>>> refs/remotes/origin/main
