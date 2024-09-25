<?php
require_once "../../models/Sede.php";
require_once "../../config/database.php";

$idSede = trim($_POST['idSede']);
$sede = trim($_POST['descripcion']);


$sedeModel = new Sede();
$sedeModel->setDescripcion($sede);

$response = $sedeModel->existeSede();

if ($response['message'] == 'Sede encontrada'){
    print json_encode($response);
}else{
    $sedeModel->setidSede($idSede);
    $sedeModel->setDescripcion($sede);
    $response = $sedeModel->actualizarSede();
    print json_encode($response);
}