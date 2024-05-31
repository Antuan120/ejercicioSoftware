<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mi_empresa1";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Actualizar la consulta para incluir la columna imagen
$sql = "SELECT nombre_completo AS nombreCompleto, profesion, telefono, correo, linkedin, habilidades, imagen FROM postulaciones";

$result = $conn->query($sql);

$postulados = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $row['habilidades'] = json_decode($row['habilidades']);
        $postulados[] = $row;
    }
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($postulados);
?>
