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

$sql = "SELECT nombre_completo, profesion, telefono, correo, linkedin, habilidades FROM postulaciones ORDER BY id DESC LIMIT 1";
$result = $conn->query($sql);

$data = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $row['habilidades'] = json_decode($row['habilidades']); // Decodificar habilidades
        $data[] = $row;
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datos del Formulario</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <h2>Datos del Formulario</h2>
        <?php foreach ($data as $item): ?>
        <div class="card">
            <p><strong>Nombre completo:</strong> <?php echo $item['nombre_completo']; ?></p>
            <p><strong>Profesión:</strong> <?php echo $item['profesion']; ?></p>
            <p><strong>Teléfono:</strong> <?php echo $item['telefono']; ?></p>
            <p><strong>Correo electrónico:</strong> <?php echo $item['correo']; ?></p>
            <p><strong>Perfil de LinkedIn:</strong> <a href="<?php echo $item['linkedin']; ?>"><?php echo $item['linkedin']; ?></a></p>
            <p><strong>Habilidades:</strong> <?php echo implode(', ', $item['habilidades']); ?></p>
        </div>
        <?php endforeach; ?>
    </div>
</body>
</html>
