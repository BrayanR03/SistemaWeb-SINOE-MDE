<?php
require_once "../../models/Movimiento.php";
require_once "../../config/database.php";

$movimientoObj = new Movimiento();

$idUsuario = $_POST["idUsuario"];
// $idCasilla = $_POST["idCasilla"];
// $tipoUsuario = $_POST["tipoUsuario"];
// $filtroBusqueda=$_POST["filtroBusqueda"];

// $Pagina = $_POST['pagina'];
// $RegistrosPorPagina = $_POST['registrosPorPagina'];

$response = $movimientoObj->listarNotificacionesCasilla($idUsuario);

// $response = $movimientoObj->listarNotificacionesCasilla($usuario);
if ($response > 0) {
    $data = $response;
} else {
    $data = null;
}

print json_encode($data);
