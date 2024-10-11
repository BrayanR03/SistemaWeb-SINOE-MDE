<?php
require_once "../../models/usuario/Usuario.php";
require_once "../../models/Persona.php";
require_once "../../config/database.php";

$idUsuario=$_POST['idUsuario'];
$nombres=$_POST['nombres'];
$email=$_POST['email'];
$telefono=$_POST['telefono'];
$domicilio=$_POST['domicilio'];
$tipoPersona=$_POST['tipoPersona'];
$tipoDocumentoIdentidad=$_POST['tipoDocumentoIdentidad'];
$numDocumentoIdentidad=$_POST['numDocumentoIdentidad'];
$representanteLegal=$_POST['representanteLegal'];
$dniCUI=$_POST['dniCUI'];
$usuario=$_POST['usuario'];
$password=$_POST['password'];

// $usuarioModel = new Usuario();
$personaModel=new Persona();
// $usuarioModel->setUsuario($usuario);
// $response=$usuarioModel->existeUsuario();
$personaModel->setNumDocumentoIdentidad($numDocumentoIdentidad);
$response=$personaModel->existeNumDocIdentidadActualizarPerfil($idUsuario);
if($response['message']==='EXISTE EN OTRO USUARIO, NO ACTUALICES'){
    echo "dentro de if num doc";
    print json_encode($response);
} else {
    // $usuarioModel->setidPersona($idPersona);
    // $usuarioModel->setidTipoUsuario($idTipoUsuario);
    // $usuarioModel->setidUsuario($idUsuario);
    // $usuarioModel->setUsuario($Usuario);
    // $usuarioModel->setPassword($Password);
    // $response = $usuarioModel->actualizarUsuario();
    // print json_encode($response);
}


