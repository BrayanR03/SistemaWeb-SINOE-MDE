<?php
require_once "../../models/Movimiento.php";
require_once "../../config/database.php";

$movimientoObj = new Movimiento();

$usuario=$_POST["usuario"];
// $filtroBusqueda=$_POST["filtroBusqueda"];

// $Pagina = $_POST['pagina'];
// $RegistrosPorPagina = $_POST['registrosPorPagina'];
$response=$movimientoObj->listarNotificacionesCasilla($usuario);
if ($response > 0){
    $data = $response;
}else{
    $data = null;
}

print json_encode($data);