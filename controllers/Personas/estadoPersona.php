<?php
require_once "../../models/Persona.php";
require_once "../../config/database.php";

$idPersona = trim($_POST['idPersona']);
$nombres = trim($_POST['nombres']);
$estadopersona = $_POST['estado'];

// print_r($estadopersona);
$personaModel = new Persona();
$personaModel->setidPersona($idPersona);
$personaModel->setEstado($estadopersona);
$response = $personaModel->estadoActualizarPersona();
print json_encode($response);

// $response = $areaModel->existeArea();

// if ($response['message'] == 'Area encontrada'){
//     print json_encode($response);
// }else{
    
// }