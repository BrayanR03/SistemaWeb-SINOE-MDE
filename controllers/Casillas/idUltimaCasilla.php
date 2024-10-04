<?php
require_once "../../config/database.php";
require_once "../../models/Casilla.php";

$casillaModel = new Casilla();

$response = $casillaModel->idUltimaCasilla();

print json_encode($response);