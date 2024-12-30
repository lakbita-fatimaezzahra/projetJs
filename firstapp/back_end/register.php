<?php
include('connection.php');

header('Content-Type: application/json'); // Spécifiez que la réponse est en JSON

if (!empty($_POST)) {
    // Validation des champs
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    if (empty($name) || !preg_match('/^[a-zA-Z\s]+$/', $name)) {
        echo json_encode(['success' => false, 'message' => 'Nom invalide. Il ne doit contenir que des lettres.']);
        exit;
    }

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Adresse email invalide.']);
        exit;
    }

    if (empty($password) || strlen($password) < 8) {
        echo json_encode(['success' => false, 'message' => 'Le mot de passe doit contenir au moins 8 caractères.']);
        exit;
    }

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO clients (name, email, password) VALUES (:name, :email, :password)";
    $stmt = $pdo->prepare($sql);

    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $hashed_password);

    try {
        $stmt->execute();
        echo json_encode(['success' => true, 'message' => "L'utilisateur a été ajouté avec succès !"]);
    } catch (PDOException $e) {
        if ($e->getCode() == 23000) {
            echo json_encode(['success' => false, 'message' => 'Cet email est déjà utilisé.']);
        } else {
            echo json_encode(['success' => false, 'message' => "Une erreur s'est produite : " . $e->getMessage()]);
        }
    }
}

?>
