<?php
require_once "../../models/Area.php";
require_once "../../config/database.php";

$codArea = trim($_POST['codArea']);
$area = trim($_POST['descripcion']);


$areaModel = new Area();
$areaModel->setDescripcion($area);

$response = $areaModel->existeArea();

if ($response['message'] == 'Area encontrada'){
    print json_encode($response);
}else{
    $areaModel->setidArea($codArea);
    $areaModel->setDescripcion($area);
    $response = $areaModel->actualizarArea();
    print json_encode($response);
}