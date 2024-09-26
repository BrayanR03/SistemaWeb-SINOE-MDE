<?php
require_once "../../config/database.php";
require_once "../../models/Persona.php";

$personaModel = new Persona();
$datosBusquedaFiltro=$_GET['datosBusquedaFiltro'];
$filtroBusqueda=$_GET['filtroBusqueda'];
$response = $personaModel->obtenerTotalPersonasRegistradas($datosBusquedaFiltro,$filtroBusqueda);

print json_encode($response);