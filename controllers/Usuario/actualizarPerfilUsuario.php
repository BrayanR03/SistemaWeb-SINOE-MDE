<?php
require_once "../../models/usuario/Usuario.php";
require_once "../../models/Persona.php";
require_once "../../config/database.php";

$idUsuario = $_POST['idUsuario'];
$nombres = $_POST['nombres'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$domicilio = $_POST['domicilio'];
$tipoPersona = $_POST['tipoPersona'];
$tipoDocumentoIdentidad = $_POST['tipoDocumentoIdentidad'];
$numDocumentoIdentidad = $_POST['numDocumentoIdentidad'];
$representanteLegal = $_POST['representanteLegal'];
$dniCUI = $_POST['dniCUI'];
// $usuario=$_POST['usuario'];
// $password=$_POST['password'];

$personaModel = new Persona();
$personaModel->setNombres($nombres);
// $personaModel->setApellidos($apellidos);
$personaModel->setEmail($email);
$personaModel->setTelefono($telefono);
$personaModel->setDomicilio($domicilio);
$personaModel->setTipoPersona($tipoPersona);
$personaModel->setTipoDocumentoIdentidad($tipoDocumentoIdentidad);
$personaModel->setNumDocumentoIdentidad($numDocumentoIdentidad);
$personaModel->setDniCUI($dniCUI);
// $personaModel->setEstado($estado);
$personaModel->setRepresentanteLegal($representanteLegal);
$response = $personaModel->actualizarDatosPerfilUsuario($idUsuario);
print json_encode($response);
    // $usuarioModel->setidPersona($idPersona);
    // $usuarioModel->setidTipoUsuario($idTipoUsuario);
    // $usuarioModel->setidUsuario($idUsuario);
    // $usuarioModel->setUsuario($Usuario);
    // $usuarioModel->setPassword($Password);
    // $response = $usuarioModel->actualizarUsuario();
    // print json_encode($response);
