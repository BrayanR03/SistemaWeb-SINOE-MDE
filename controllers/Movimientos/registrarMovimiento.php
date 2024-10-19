<?php
session_start();
require_once "../../models/Movimiento.php";
require_once "../../config/database.php";


$nroCasilla = trim($_POST['nroCasilla']);
$tipoDocumento = $_POST['tipoDocumento'];
$nroDocumento = trim($_POST['nroDocumento']);
$fechaDocumento = $_POST['fechaDocumento'];
$fechaNotificacion = $_POST['fechaNotificacion'];
// $archivoDocumento = $_POST['archivoDocumento'];
$sumilla = trim($_POST['sumilla']);
$areaNotificacion = $_POST['areaNotificacion'];
$sedeNotificacion = $_POST['sedeNotificacion'];
$idUsuario = $_POST['usuarioRegistrador'];

// Manejar el archivo subido
// if (isset($_FILES['archivoDocumento']) && $_FILES['archivoDocumento']['error'] === UPLOAD_ERR_OK) {
//     // Obtener información del archivo
//     $archivoNombre = $_FILES['archivoDocumento']['name'];
//     $archivoTipo = $_FILES['archivoDocumento']['type'];
//     $archivoTamaño = $_FILES['archivoDocumento']['size'];
//     $archivoTmpName = $_FILES['archivoDocumento']['tmp_name'];
    
//     // Leer el archivo en binario (si se va a guardar en la base de datos)
//     $archivoContenido = file_get_contents($archivoTmpName);

//     // Aquí puedes guardar el archivo en el sistema de archivos o en la base de datos (como VARBINARY en SQL Server)
// } else {
//     // Manejar el caso donde no se subió ningún archivo o ocurrió un error
//     $archivoContenido = null;
// }


$movimientoModel = new Movimiento();
$movimientoModel->setCasilla($nroCasilla);
$movimientoModel->setTipoDocumento($tipoDocumento);
$movimientoModel->setNroDocumento($nroDocumento);
$movimientoModel->setFechaDocumento($fechaDocumento);
$movimientoModel->setFechaNotificacion($fechaNotificacion);
$movimientoModel->setSumilla($sumilla);
$movimientoModel->setArea($areaNotificacion);
$movimientoModel->setSede($sedeNotificacion);
$movimientoModel->setUsuario($idUsuario);
// $movimientoModel->setArchivoDocumento($archivoContenido);
$response=$movimientoModel->registrarMovimiento();
// $movimientoModel->setNumDocumentoIdentidad($numDocumentoIdentidad);
// $response = $movimientoModel->existeNumDocIdentidad();

// if ($response['message'] == 'NumDoc encontrado') {
//     print json_encode($response);
// } else {
//     $personaModel->setNombres($razonSocial);
//     $personaModel->setApellidos($apellidos);
//     $personaModel->setDniCUI($dniCUI);
//     $personaModel->setEmail($email);
//     $personaModel->setTelefono($telefono);
//     $personaModel->setDomicilio($domicilio);
//     $personaModel->setTipoPersona($tipoPersona);
//     $personaModel->setTipoDocumentoIdentidad($tipoDocumentoIdentidad);
//     $personaModel->setNumDocumentoIdentidad($numDocumentoIdentidad);
//     $personaModel->setRepresentanteLegal($representanteLegal);
//     $response = $personaModel->registrarPersona();
//     print json_encode($response);
// }
