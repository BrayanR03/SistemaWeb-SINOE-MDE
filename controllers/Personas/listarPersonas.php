<?php
require_once "../../models/Persona.php";
require_once "../../config/database.php";

$personaObj = new Persona();

$datosBusquedaFiltro=$_POST["datosBusquedaFiltro"];
$filtroBusqueda=$_POST["filtroBusqueda"];
$Pagina = $_POST['pagina'];
$RegistrosPorPagina = $_POST['registrosPorPagina'];
$personaObj->setNombres($datosBusquedaFiltro);
$personaObj->setNumDocumentoIdentidad($filtroBusqueda);
$response = $personaObj->ListarPersonasRegistradas($datosBusquedaFiltro,$filtroBusqueda);

if ($response > 0){
    $data = $response;
}else{
    $data = null;
}

print json_encode($data);