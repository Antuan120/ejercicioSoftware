<?php
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "tu_base_de_datos";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Crear el directorio 'uploads' si no existe
$targetDir = "uploads/";
if (!file_exists($targetDir)) {
    mkdir($targetDir, 0755, true);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombreCompleto = $_POST['nombreCompleto'];
    $profesion = $_POST['profesion'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $linkedin = $_POST['linkedin'];
    $habilidades = implode(", ", $_POST['habilidades']);

    // Manejar la subida de la imagen
    $imagen = '';
    if (isset($_FILES["imagen"]) && $_FILES["imagen"]["error"] == 0) {
        $targetDir = "uploads/";
        if (!file_exists($targetDir)) {
            mkdir($targetDir, 0755, true);
        }
        $targetFile = $targetDir . basename($_FILES["imagen"]["name"]);
        if (move_uploaded_file($_FILES["imagen"]["tmp_name"], $targetFile)) {
            $imagen = $targetFile;
        } else {
            echo "Error al subir la imagen.";
            exit;
        }
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil del Postulante</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <h1>Perfil del Postulante</h1>
        <img src="<?php echo htmlspecialchars($imagen); ?>" alt="Imagen del postulante" id="imagenPerfil">
        <h2><?php echo htmlspecialchars($nombreCompleto); ?></h2>
        <p><strong>Profesión:</strong> <?php echo htmlspecialchars($profesion); ?></p>
        <p><strong>Teléfono:</strong> <?php echo htmlspecialchars($telefono); ?></p>
        <p><strong>Correo:</strong> <?php echo htmlspecialchars($correo); ?></p>
        <p><strong>Perfil de LinkedIn:</strong> <a href="<?php echo htmlspecialchars($linkedin); ?>"><?php echo htmlspecialchars($linkedin); ?></a></p>
        <p><strong>Habilidades:</strong> <?php echo htmlspecialchars($habilidades); ?></p>
    </div>
</body>
</html>


$conn->close();
?>
