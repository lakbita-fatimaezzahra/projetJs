<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

var_dump($_POST);
$host = '127.0.0.1';  // Use localhost or IP address
$dbname = 'pizza_project';  // Replace with your database name
$username = 'root';  // Default XAMPP username is 'root'
$password = '';  // Default XAMPP password is empty for 'root'

// Set DSN (Data Source Name)
$conn = "mysql:host=$host;dbname=$dbname;charset=utf8";

try {
    // Create a PDO instance (connect to the database)
    $pdo = new PDO($conn, $username, $password);

    // Set PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connected to the database successfully!";
} catch (PDOException $e) {
    // If connection fails, display error message
    echo "Connection failed: " . $e->getMessage();
}
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