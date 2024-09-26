<?php

class TipoPersonas{
    private $idTipoPersona;
    private $Descripcion;

    public function __construct()
    {
        
    }

    public function getidTipoPersona(){
        return $this->idTipoPersona;
    }
    public function setidTipoPersona($idTipoPersona){
        $this->idTipoPersona=$idTipoPersona;
    }
    public function getDescripcion(){
        return $this->Descripcion;
    }
    public function setDescripcion($Descripcion){
        $this->Descripcion=$Descripcion;
    }

    public function listarTipoPersonasCombo(){
        $sql="SELECT Descripcion,idTipoPersona FROM TIPOPERSONAS";
        $stmt=database::connect()->prepare($sql);
        $stmt->execute();
        $results=$stmt->fetchAll(PDO::FETCH_ASSOC);
        return $results;
    }
}

?>