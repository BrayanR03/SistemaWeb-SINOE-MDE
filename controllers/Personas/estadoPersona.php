<?php
require_once "../../models/Persona.php";
require_once "../../config/database.php";

$idUsuario = trim($_POST['idUsuario']);
$nombres = trim($_POST['nombres']);
$estadousuario = $_POST['estado'];

$usuarioModel = new Usuario();
$usuarioModel->setidUsuario($idUsuario);
$usuarioModel->setEstado($estadousuario);
$response = $usuarioModel->estadoActualizarUsuario();
print json_encode($response);

// $response = $areaModel->existeArea();

// if ($response['message'] == 'Area encontrada'){
//     print json_encode($response);
// }else{
    
// }