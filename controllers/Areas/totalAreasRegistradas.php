<?php
require_once "../../config/database.php";
require_once "../../models/Area.php";

$areaModel = new Area();
$descripcionArea=$_GET['Descripcion'];
$response = $areaModel->obtenerTotalAreasRegistradas();

print json_encode($response);