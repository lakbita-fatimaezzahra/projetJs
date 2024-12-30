<?php 
include('connection.php');
if (!empty($_POST)) {
    // Connexion à la base de données

    // Préparer la requête
    $sql = "INSERT INTO clients (name, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        // Lier les valeurs aux paramètres
        $stmt->bind_param('sss', $_POST['name'], $_POST['email'], $_POST['password']);

        // Exécuter la requête
        if ($stmt->execute()) {
            echo "L'utilisateur a été ajouté avec succès !";
        } else {
            echo "Erreur lors de l'ajout de l'utilisateur : " . $stmt->error;
        }

        // Fermer la requête
        $stmt->close();
    } else {
        echo "Erreur lors de la préparation de la requête : " . $conn->error;
    }

    // Fermer la connexion
    $conn->close();
}

?>