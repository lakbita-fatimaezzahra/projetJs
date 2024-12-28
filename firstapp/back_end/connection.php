<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
$host = '127.0.0.1';  // Use localhost or IP address
$dbname = 'pizza_project';  // Replace with your database name
$username = 'root';  // Default XAMPP username is 'root'
$password = '';  // Default XAMPP password is empty for 'root'




try {
    // Create a PDO instance (connect to the database)
    $conn =new mysqli( $host,$username, $password,$dbname);
} catch (PDOException $e) {
    // If connection fails, display error message
    echo "Connection failed: " . $e->getMessage();
}


?>