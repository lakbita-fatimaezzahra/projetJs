<?php 
include('connection.php');
if (!empty($_POST)){
    $sql = "INSERT INTO clients (name, email, password) VALUES (:name, :email, :password)";
    
    // Préparer la requête
    $stmt = $pdo->prepare($sql);
    
    // Lier les valeurs aux paramètres
    $stmt->bindParam(':name', $_POST['name']);
    $stmt->bindParam(':email', $_POST['email']);
    $stmt->bindParam(':password', $_POST['password']);
    $stmt->execute();

    echo "L'utilisateur a été ajouté avec succès !";
}

?>