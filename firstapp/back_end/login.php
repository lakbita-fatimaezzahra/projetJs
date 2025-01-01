<?php
include('connection.php');
session_start();
try {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $input = json_decode(file_get_contents("php://input"), true);

        // Vérification des données reçues
        if (empty($input['username']) || empty($input['password'])) {
            echo json_encode(["success" => false, "message" => "Veuillez fournir un email et un mot de passe."]);
            exit;
        }

        $username = filter_var($input['username'], FILTER_SANITIZE_EMAIL);
        $password = $input['password'];

        // Vérifier si l'utilisateur existe
        $stmt = $conn->prepare("SELECT id, email, password FROM clients WHERE email = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();

            // Vérification du mot de passe
            if (password_verify($password, $user['password'])) {
                $_SESSION['id']=$user['id'];
                echo json_encode(["success" => true, "userId" => $user['id']]);
            } else {
                echo json_encode(["success" => false, "message" => "Identifiants incorrects"]);
            }
        } else {
            echo json_encode(["success" => false, "message" => "Identifiants incorrects"]);
        }

        $stmt->close();
    } else {
        echo json_encode(["success" => false, "message" => "Méthode non autorisée"]);
    }
} catch (Exception $e) {
    // Gestion des erreurs serveur
    echo json_encode(["success" => false, "message" => "Une erreur est survenue. Veuillez réessayer plus tard."]);
} finally {
    $conn->close();
}
