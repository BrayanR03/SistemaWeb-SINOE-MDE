<?php
session_start();
require_once "../../config/parameters.php";



$_SESSION['Usuario'] = $response['data'][0]['Usuario'];
$_SESSION['TipoUsuario'] = $response['data'][0]['TipoUsuario'];
$_SESSION['Persona'] = $response['data'][0]['Persona'];
$_SESSION['TipoPersona'] = $response['data'][0]['TipoPersona'];
$_SESSION['autenticado'] = true;
// $_SESSION['Usuario'] = $_POST['data'];
// $_SESSION['autenticado'] = true;
$_SESSION['base_url'] = base_url;

$response = (isset($_SESSION['Usuario'], $_SESSION['Persona'], $_SESSION['TipoUsuario'], 
             $_SESSION['TipoPersona'], $_SESSION['autenticado']) && 
             !empty($_SESSION['Usuario']) && !empty($_SESSION['Persona'])
             && !empty($_SESSION['TipoPersona']) && !empty($_SESSION['TipoUsuario']) && $_SESSION['autenticado'] === true);

print json_encode($response);
