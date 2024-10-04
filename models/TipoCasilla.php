<?php

class TipoCasilla
{

    private $idTipoCasilla;
    private $Descripcion;

    public function __construct() {}

    public function getidTipoCasilla()
    {
        return $this->idTipoCasilla;
    }
    public function setidTipoCasilla($idTipoCasilla)
    {
        $this->idTipoCasilla = $idTipoCasilla;
    }
    public function getDescripcion()
    {
        return $this->Descripcion;
    }
    public function setDescripcion($Descripcion)
    {
        $this->Descripcion = $Descripcion;
    }

    public function ListadoTipoCasillasCombo()
    {
        $sql = "SELECT Descripcion,idTipoCasilla FROM TIPOCASILLAS";
        $stmt = database::connect()->prepare($sql);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        return $results;
    }
}

?>
