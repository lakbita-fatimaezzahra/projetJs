<?php
include('connection.php');
$sql = "SELECT p.ID_Pizza, p.Nom_Pizza, p.description,p.image, t.libelle as taille, pt.Prix
        FROM pizza p
        JOIN pizza_taille pt ON p.ID_Pizza = pt.ID_Pizza
        JOIN taille t ON pt.ID_Taille = t.ID_Taille";

$result = $conn->query($sql);

$pizzas = [];
while ($row = $result->fetch_assoc()) {
    $pizzaId = $row['ID_Pizza'];

    if (!isset($pizzas[$pizzaId])) {
        $pizzas[$pizzaId] = [
            'id' => $pizzaId,
            'Nom_Pizza' => $row['Nom_Pizza'],
            'description' => $row['description'],
            'image'=>$row['image'],
            'varients' => [],
            'prices' => []
        ];
    }

    $pizzas[$pizzaId]['varients'][] = $row['taille'];
    $pizzas[$pizzaId]['prices'][0][$row['taille']] = $row['Prix'];
}

echo json_encode(array_values($pizzas));


?>