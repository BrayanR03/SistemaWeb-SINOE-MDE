<?php

class TipoDocumentoIdentidad{
    private $idTipoDocumentoIdentidad;
    private $Descripcion;

    public function __construct()
    {
        
    }

    public function getidTipoDocumentoIdentidad(){
        return $this->idTipoDocumentoIdentidad;
    }
    public function setidTipoDocumentoIdentidad($idTipoDocumentoIdentidad){
        $this->idTipoDocumentoIdentidad=$idTipoDocumentoIdentidad;
    }
    public function getDescripcion(){
        return $this->Descripcion;
    }
    public function setDescripcion($Descripcion){
        $this->Descripcion=$Descripcion;
    }

    public function listarTipoDocumentoIdentidadCombo(){
        $sql="SELECT Descripcion,idTipoDocumentoIdentidad FROM TIPODOCUMENTOSIDENTIDAD";
        $stmt=database::connect()->prepare($sql);
        $stmt->execute();
        $results=$stmt->fetchAll(PDO::FETCH_ASSOC);
        return $results;
    }
}

?>