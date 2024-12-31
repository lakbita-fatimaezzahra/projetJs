<?php 
include('connection.php');

if (!empty($_POST)) {
    // Validation des champs avec regex
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $confirm_password = trim($_POST['confirm_password']);

    $email_regex = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";

    // Vérification du format de l'email
    if (!preg_match($email_regex, $email)) {
        echo json_encode(["success" => false, "message" => "L'adresse email n'est pas valide."]);
        exit;
    }

    // Vérification de la longueur du mot de passe
    if (strlen($password) < 8) {
        echo json_encode(["success" => false, "message" => "Le mot de passe doit contenir au moins 8 caractères."]);
        exit;
    }

    // Vérification de la correspondance des mots de passe
    if ($password !== $confirm_password) {
        echo json_encode(["success" => false, "message" => "Les mots de passe ne correspondent pas."]);
        exit;
    }

    // Vérifier si l'email est déjà utilisé
    $check_sql = "SELECT id FROM clients WHERE email = ?";
    $check_stmt = $conn->prepare($check_sql);
    $check_stmt->bind_param('s', $email);
    $check_stmt->execute();
    $check_stmt->store_result();

    if ($check_stmt->num_rows > 0) {
        echo json_encode(["success" => false, "message" => "Cet email est déjà utilisé."]);
        $check_stmt->close();
        exit;
    }

    $check_stmt->close();

    // Insérer l'utilisateur dans la base de données
    $sql = "INSERT INTO clients (name, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param('sss', $name, $email, $password);

        if ($stmt->execute()) {
            // Succès : utilisateur ajouté
            echo json_encode(["success" => true, "message" => "Utilisateur ajouté avec succès !"]);
        } else {
            // Échec de l'insertion
            echo json_encode(["success" => false, "message" => "Erreur lors de l'ajout de l'utilisateur : " . $stmt->error]);
        }

        $stmt->close();
    } else {
        echo json_encode(["success" => false, "message" => "Erreur lors de la préparation de la requête : " . $conn->error]);
    }

    $conn->close();
}

?>