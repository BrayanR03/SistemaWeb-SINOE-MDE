<?php
require_once "../../models/Area.php";
require_once "../../config/database.php";

$areaObj = new Area();

$Descripcion=$_POST["Descripcion"];
$Pagina = $_POST['Pagina'];
$RegistrosPorPagina = $_POST['RegistrosPorPagina'];
$areaObj->setDescripcion($Descripcion);

$response = $areaObj->ListarAreasRegistradas($Descripcion);

if ($response > 0){
    $data = $response;
}else{
    $data = null;
}

print json_encode($data);