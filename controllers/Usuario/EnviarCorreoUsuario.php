<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../../Librerias/PHPMailer/src/PHPMailer.php';
require '../../Librerias/PHPMailer/src/SMTP.php';
require '../../Librerias/PHPMailer/src/Exception.php';

class EnviarCorreoUsuario
{
    public function enviar($correoReceptor, $nombreReceptor, $asunto, $mensaje)
    {
        $mail = new PHPMailer(true);

        try {
            // Configuración del servidor SMTP
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'bryanneciosup626@gmail.com';  // Cambia con tu correo
            $mail->Password = 'rqdefyjxtdxxkhgn';         // Cambia con tu contraseña de aplicación
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            // Configuración del remitente y destinatario
            $mail->setFrom('bryanneciosup626@gmail.com', 'Sistema SINOE');
            $mail->addAddress($correoReceptor, $nombreReceptor);

            // Contenido del correo
            $mail->isHTML(true);
            $mail->Subject = $asunto;
            $mail->Body = "Bienvenido al SISTEMA SINOE, este es tu USUARIO ". $mensaje;

            // Enviar el correo
            $mail->send();
            return 'Correo enviado exitosamente';
        } catch (Exception $e) {
            return 'Error al enviar el correo: ' . $mail->ErrorInfo;
        }
    }
}
