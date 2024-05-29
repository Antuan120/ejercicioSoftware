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

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombreCompleto = $_POST['nombreCompleto'];
    $profesion = $_POST['profesion'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $linkedin = $_POST['linkedin'];
    $habilidades = json_encode($_POST['habilidades']);

    $sql = "INSERT INTO postulaciones (nombre_completo, profesion, telefono, correo, linkedin, habilidades)
            VALUES ('$nombreCompleto', '$profesion', '$telefono', '$correo', '$linkedin', '$habilidades')";

    if ($conn->query($sql) === TRUE) {
        header("Location: mostrar_datos.php"); // Redirigir a mostrar_datos.php
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
