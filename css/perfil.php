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

// Obtener el ID del postulante de la URL
$id = $_GET['id'];

// Obtener los datos del postulante de la base de datos
$sql = "SELECT * FROM postulantes WHERE id = $id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Mostrar los datos del postulante
    $row = $result->fetch_assoc();
    echo "<div class='perfil'>
            <img src='" . $row['imagen'] . "' alt='Imagen del postulante'>
            <h2>" . $row['nombreCompleto'] . "</h2>
            <p>Profesión: " . $row['profesion'] . "</p>
            <p>Teléfono: " . $row['telefono'] . "</p>
            <p>Correo: " . $row['correo'] . "</p>
            <p>LinkedIn: <a href='" . $row['linkedin'] . "'>" . $row['linkedin'] . "</a></p>
            <p>Habilidades: " . $row['habilidades'] . "</p>
          </div>";
} else {
    echo "No se encontraron datos para este perfil.";
}

$conn->close();
?>
