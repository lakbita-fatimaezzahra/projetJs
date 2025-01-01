<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

header('Content-Type: application/json');
$host = '127.0.0.1';  // Use localhost or IP address
$dbname = 'pizza_project';  // Replace with your database name
$username = 'root';  // Default XAMPP username is 'root'
$password = '';  // Default XAMPP password is empty for 'root'
 

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


?>